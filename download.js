(() => {
  const dialog = document.getElementById('appDownloadDialog');
  const trigger = document.getElementById('appDownloadOpen');
  if (!dialog || !trigger) return;
  // The download offer is intended for browser visitors, not the installed app.
  if (window.Capacitor?.isNativePlatform()) {
    trigger.hidden = true;
    trigger.style.display = 'none';
    return;
  }
  const storageKey = 'gsat-android-download-seen';
  const open = () => { if (!dialog.open) dialog.showModal(); };
  const remember = () => {
    try { sessionStorage.setItem(storageKey, '1'); } catch (_) { /* Storage may be unavailable. */ }
  };
  trigger.addEventListener('click', open);
  for (const id of ['appDownloadClose', 'appDownloadLater']) {
    document.getElementById(id).addEventListener('click', () => dialog.close());
  }
  dialog.addEventListener('close', () => { remember(); trigger.focus({ preventScroll: true }); });
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  document.getElementById('appDownloadLink').addEventListener('click', () => {
    remember();
    document.getElementById('appDownloadStatus').textContent = 'Download requested. Check your browser downloads for GSAT.apk.';
  });
  let seen = false;
  try { seen = sessionStorage.getItem(storageKey) === '1'; } catch (_) { /* Still offer the download. */ }
  if (!seen && (!location.hash || location.hash === '#dashboard')) open();
})();
