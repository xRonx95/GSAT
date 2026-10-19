const {spawn} = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const {pathToFileURL} = require('node:url');

const root = path.resolve(__dirname, '..');
const output = path.join(root, '.tmp-ui');
fs.mkdirSync(output, {recursive: true});
const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=0', `--user-data-dir=${path.join(output, 'review-profile')}`, 'about:blank'
], {windowsHide: true, stdio:['ignore','ignore','pipe']});
const pending = new Map();
let socket, id=0;
let failure = '';
chrome.stderr.on('data', data => failure += data);
const delay = ms => new Promise(resolve=>setTimeout(resolve, ms));
async function main() {
  let endpoint;
  for(let i=0; i<100; i++) {
    endpoint = failure.match(/DevTools listening on (ws:\/\/[^\s]+)/)?.[1];
    if(endpoint) break;
    await delay(100);
  }
  if(!endpoint) throw Error('Chrome debugging endpoint unavailable: '+failure.slice(-1000));
  socket = new WebSocket(endpoint);
  await new Promise((resolve,reject)=>{socket.onopen=resolve;socket.onerror=reject;});
  socket.onmessage = event => {
    const message = JSON.parse(event.data);
    if(message.id && pending.has(message.id)) {
      const {resolve,reject}=pending.get(message.id); pending.delete(message.id);
      if(message.error) reject(Error(JSON.stringify(message.error))); else resolve(message.result);
    }
  };
  function send(method,params={},sessionId) {
    return new Promise((resolve,reject)=>{
      const request=++id; pending.set(request,{resolve,reject});
      socket.send(JSON.stringify({id:request,method,params,...(sessionId?{sessionId}:{})}));
    });
  }
  const {targetId}=await send('Target.createTarget',{url:'about:blank'});
  const {sessionId}=await send('Target.attachToTarget',{targetId,flatten:true});
  const call=(method,params)=>send(method,params,sessionId);
  const evaluate = async expression => {
    const response=await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});
    if(response.exceptionDetails) throw Error(JSON.stringify(response.exceptionDetails));
    return response.result.value;
  };
  await call('Page.enable');
  await call('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
  await call('Page.navigate',{url:pathToFileURL(path.join(root,'index.html')).href});
  for(let i=0;i<50;i++) {
    if(await evaluate('typeof BANK !== "undefined" && document.readyState === "complete"')) break;
    await delay(100);
  }
  await evaluate('localStorage.removeItem(SESSION_KEY); session = null; location.hash="dashboard"; route()');
  await evaluate('document.getElementById("appDownloadOpen").click()');
  assert.equal(await evaluate('document.getElementById("appDownloadDialog").open'),true);
  assert.equal(await evaluate('document.getElementById("appDownloadLink").getAttribute("href")'),'downloads/app-debug.apk');
  for (const width of [320,390,768,1280]) {
    await call('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<=700});
    assert.ok(await evaluate('(()=>{const r=document.getElementById("appDownloadDialog").getBoundingClientRect();return r.left>=0 && r.right<=innerWidth && r.top>=0 && r.bottom<=innerHeight})()'),`Download dialog fits at ${width}`);
  }
  await evaluate('document.getElementById("appDownloadLater").click()');
  assert.equal(await evaluate('document.getElementById("appDownloadDialog").open'),false);
  assert.equal(await evaluate('document.activeElement.id'),'appDownloadOpen');
  for(const width of [320,390,700,768,1280]) {
    await call('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<=700});
    const metrics=await evaluate(`({width:innerWidth, scroll:document.documentElement.scrollWidth, nav:getComputedStyle(document.querySelector('.mobile-nav')).display})`);
    assert.ok(metrics.scroll <= width+1, `Dashboard overflow at ${width}: ${JSON.stringify(metrics)}`);
    assert.equal(metrics.nav==='grid',width<=700);
  }
  await call('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
  let shot=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
  fs.writeFileSync(path.join(output,'mobile-dashboard.png'),Buffer.from(shot.data,'base64'));
  await evaluate('startQuiz("mock"); location.hash="mock"; route(); document.getElementById("mockArea").scrollIntoView();');
  assert.equal(await evaluate('document.querySelectorAll(".exam-subject-section").length'),5);
  assert.equal(await evaluate('document.querySelectorAll(".exam-subject-section")[0].querySelector("h2").textContent'),'Language Proficiency');
  assert.equal(await evaluate('document.querySelectorAll(".exam-subject-section")[1].querySelector("h2").textContent'),'Verbal Analogy');
  assert.equal(await evaluate('document.querySelectorAll("input[type=radio]").length'),800);
  await evaluate('document.querySelector("input[name=q0]").click(); document.querySelector("[data-flag]").click();');
  assert.match(await evaluate('document.getElementById("answerProgress").textContent'),/1 of 200 answered · 1 flagged/);
  await evaluate('document.querySelector("[data-section-scroll=analogy]").click()');
  assert.equal(await evaluate('document.activeElement.id'),'examSection-analogy');
  for(const width of [320,390,700,768,1280]) {
    await call('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<=700});
    const metrics=await evaluate('({width:innerWidth, scroll:document.documentElement.scrollWidth})');
    if(metrics.scroll>width+1) console.log(await evaluate(`JSON.stringify([...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>${width}+1).slice(0,12).map(e=>({tag:e.tagName,cls:e.className,id:e.id,right:e.getBoundingClientRect().right})))`));
    assert.ok(metrics.scroll<=width+1, `Exam overflow at ${width}: ${JSON.stringify(metrics)}`);
  }
  await call('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
  await evaluate('document.getElementById("examSection-english").scrollIntoView();');
  await delay(400);
  shot=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
  fs.writeFileSync(path.join(output,'mobile-exam.png'),Buffer.from(shot.data,'base64'));
  await evaluate('location.hash="essay";route()');
  assert.equal(await evaluate('document.querySelector(".mobile-nav [aria-current=page]").dataset.page'),'essay');
  assert.ok(await evaluate('document.documentElement.scrollWidth <= innerWidth'));
  for(const page of ['lessons','practice','essay']) {
    await evaluate(`location.hash='${page}';route()`);
    for(const width of [320,390,768]) {
      await call('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<=700});
      assert.ok(await evaluate('document.documentElement.scrollWidth <= innerWidth'),`${page} overflow at ${width}`);
    }
  }
  await call('Emulation.setDeviceMetricsOverride',{width:1280,height:1000,deviceScaleFactor:1,mobile:false});
  await evaluate('location.hash="dashboard";route()');
  await delay(500);
  assert.equal(await evaluate('scrollY'),0,'Navigation should reveal the page heading below the header');
  shot=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
  fs.writeFileSync(path.join(output,'desktop-dashboard.png'),Buffer.from(shot.data,'base64'));
  await send('Browser.close');
  console.log('PASS: Chrome layout at 320, 390, 700, 768, and 1280px; subject sections; answer tracking; flags; subject jump controls; mobile navigation. Screenshots saved to .tmp-ui.');
}
main().catch(error=>{console.error(error); process.exitCode=1;}).finally(()=>{socket?.close();chrome.kill();});
