const CACHE_NAME = "VERSION-1";
const urlsToCache =['index.html','offline.html'];

const self = this;
//Install SW
self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)

        .then((cache) => { 
            console.log('open catch')
            return caches.addAll(urlsToCache);
        })
    )

});
//Listen for requests
self.addEventListener('fetch',(event)=>{
    event.responWidth(
        caches.match(event.request)
        .then(()=> {
            return fetch(event.request)
            //to dont have any internet 
        .catch(()=> caches.match('offline.html'))
        })
    
    )

});

// Active the SW
self.addEventListener('activate',(event)=>{
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cachesName) => {
                if(!cacheWhitelist.includes(cachesName))
                return caches.delate(cacheNames)
            })
        ))
    )

});