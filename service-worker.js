const PRECACHE = 'cache-v3';
const RUNTIME = 'runtime';

const PRECACHE_URLS = [
   'index.html',
   'ui.js',
   'basin.js',
   'changelog.html',
   'constants.js',
   'designations.js',
   'environment.js',
    'favicon.ico',
    'favicon.png',
    'manifest.webmanifest',
   'misc.js',
   'moment.min.js',
   'scale.js',
   'service-worker.js',
  'sim-mode-defs.js',
    'sketch.js',
     'storm.js',
   'style.css',
    'style2.css',
    'ui.js',
   'version.js',
  'worker.js'
	  ];
self.addEventListener('install', function() {
  console.log('Install!');
	e.waitUntil((async () => {
    const cache = await caches.open(PRECACHE);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(PRECACHE_URLS);
  })());
});
self.addEventListener("activate", event => {
  console.log('Activate!');
	e.waitUntil(caches.keys().then((keyList) => {
    Promise.all(keyList.map((key) => {
      if (key === PRECACHE) { return; }
      caches.delete(key);
    }))
  })());

});
self.addEventListener('fetch', function(event) {
  console.log('Fetch!', event.request);
	e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) { return r; }
    const response = await fetch(e.request);
    const cache = await caches.open(PRECACHE);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});
