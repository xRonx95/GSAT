const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const storage = new Map();
let now = 1800000000000;
function boot() {
  const nodes = new Map();
  const node = key => {
    if (!nodes.has(key)) nodes.set(key, {
      innerHTML: '', textContent: '', value: key.match(/\[value="(\d+)"\]/)?.[1] || '', checked: false,
      classList: {toggle(){}, add(){}}, scrollIntoView(){}, focus(){},
      closest(){return {classList:{add(){}}};},
      querySelector(selector) {
        if (selector.includes(':checked')) {
          const match = selector.match(/name="q(\d+)"/);
          return [...nodes.entries()].find(([key, input]) => key.startsWith(`input[name="q${match[1]}"][value=`) && input.checked)?.[1] || null;
        }
        return node(selector);
      },
      querySelectorAll(selector) {
        const match = selector.match(/^input\[name="q(\d+)"\]$/);
        if (match) return [0,1,2,3].map(j=>node(`input[name="q${match[1]}"][value="${j}"]`));
        return [];
      }
    });
    return nodes.get(key);
  };
  const context = vm.createContext({
    console, Date: {now:()=>now}, confirm:()=>true,
    localStorage: {getItem:key=>storage.get(key) ?? null, setItem:(key,value)=>storage.set(key,value), removeItem:key=>storage.delete(key)},
    document: {readyState:'loading', addEventListener(){}, getElementById:id=>node(`#${id}`), querySelectorAll:()=>[]},
    location: {hash:''}, clearInterval(){}, setInterval:callback=>{context.tick = callback; return 1;}
  });
  for (const file of ['review-content.js','extended-content.js','script.js']) {
    vm.runInContext(fs.readFileSync(path.join(__dirname,'..',file),'utf8'), context);
  }
  const run = code => vm.runInContext(code, context);
  return {context, run, node};
}

let app = boot();
assert.equal(app.run('BANK.length'),210);
assert.equal(app.run('new Set(BANK.map(q=>q.id)).size'),210);
assert.equal(app.run('new Set(BANK.map(q=>q.question)).size'),210);
assert.equal(app.run('BANK.every(q=>q.options.length===4 && new Set(q.options).size===4 && Number.isInteger(q.answer) && q.answer>=0 && q.answer<4 && q.explanation.length>20)'),true);
assert.equal(app.run(`(() => {
  const sample = {questions:[BANK.find(q=>q.subject==='logic'),BANK.find(q=>q.subject==='english'),BANK.find(q=>q.subject==='analogy')],selections:{0:2,2:1},flagged:[0,1]};
  const originalLogicId = sample.questions[0].id;
  organizeSession(sample);
  return sample.questions.map(q=>q.subject).join(',') === 'english,analogy,logic'
    && sample.questions[2].id === originalLogicId
    && sample.selections[2] === 2 && sample.selections[1] === 1
    && sample.flagged.join(',') === '0,2';
})()`),true,'Grouping must preserve selected answers and flags from mixed subject sessions');
app.run('startQuiz("mock")');
assert.equal(app.run('session.questions.length'),200);
assert.equal(app.run('EXAM_SUBJECTS.every(key=>session.questions.filter(q=>q.subject===key).length===40)'),true);
assert.equal(app.run('session.questions.every((q,i)=>q.subject===EXAM_SUBJECTS[Math.floor(i/40)])'),true);
assert.equal(app.run('session.remaining'),14400);
assert.equal(app.node('#quizTimer').textContent,'04:00:00');
const firstAnswer = app.run('session.questions[0].answer');
const firstOptions = app.run('JSON.stringify(session.questions[0].options)');
app.run(`session.selections[0]=${firstAnswer};session.flagged=[0];persistSession()`);
now += 65*1000;
app = boot();
app.run('restoreSession()');
assert.equal(app.run('session.questions.length'),200);
assert.equal(app.run('session.remaining'),14335);
assert.equal(app.node('#quizTimer').textContent,'03:58:55');
assert.equal(app.run('JSON.stringify(session.questions[0].options)'),firstOptions);
assert.equal(app.node(`input[name="q0"][value="${firstAnswer}"]`).checked,true);
assert.equal(app.node('[data-flag="0"]').checked,true);
app.run('session.questions.forEach((q,i)=>{document.getElementById(session.area).querySelector(`input[name="q${i}"][value="${q.answer}"]`).checked=true;});submitQuiz(false)');
assert.equal(app.run('progress.correct'),200);
assert.equal(app.run('progress.best'),200);
assert.equal(storage.has('gsatActiveAssessmentV2'),false);

app.run('startQuiz("mock")');
now += 14401*1000;
app = boot();
app.run('restoreSession()');
assert.equal(app.run('session.submitted'),true);
assert.equal(storage.has('gsatActiveAssessmentV2'),false);

app = boot();
app.run('essayInit()');
assert.equal(app.run('PROMPTS.length'),17);
for (const words of [249,250,251]) {
  app.node('#essayText').value=Array(words).fill('word').join(' ');
  app.node('#essayText').oninput();
  const text=app.node('#wordCount').textContent;
  assert.ok(text.startsWith(`${words} / 250 words`));
  assert.ok(text.includes(words===250 ? 'requirement met' : words<250 ? '1 word remaining' : 'Remove 1 word'));
}
console.log('PASS: 210 unique items; 200-item balanced exam; four-hour timer; restored responses, order, flags and elapsed time; scoring; expired-session submission; 17 prompts; 249/250/251-word feedback.');
