// Register service worker to control making site work offline
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker registered'); })
    .catch(error => {console.error(error); });
} else {
  console.error('Service Worker not available!');
}
