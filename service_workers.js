const cacheName = 'Arrowcentre_v2_DK_chache_files'

self.addEventListener('install', e => {
    console.log('service worker installed');

    // e.waitUntil(
    //   caches.open(cacheName)
    //   .then(cache =>{
    //     console.log('ServiceWorker: caching files');
    //     cache.addAll(cacheAssets);
    //   })
    //   .then(()=>self.skipWaiting())
    // )

});

self.addEventListener('activate', e => {
    console.log('service worker activated');
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache != cacheName) {
                        console.log('Service Worker Clearing Old cache!');
                        return caches.delete(cache);
                    }

                })
            )
        })


    );
});

self.addEventListener('fetch', e => {
    console.log('service worker fetched');

    e.respondWith(

            fetch(e.request)
            .then(res => {
                //make a copy clone of Arrowcentre website to localStorage
                const resClone = res.clone();
                // open a cache
                caches
                    .open(cacheName)
                    .then(cache => {
                        cache.put(e.request, resClone);

                    });

                return res;

            }).catch(err => caches.match(e.request)
                .then(res => res))

        )
        //alt

    // e.respondWith(fetch(e.request).catch(()=> caches.match(e.request)));





})