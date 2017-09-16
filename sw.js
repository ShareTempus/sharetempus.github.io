/* eslint-disable */

var cacheName = 'cache-v1';

var filesToCache = [
	'./index.html',
	'./index.html?utm_source=homescreen',
  './bundle.js',
	'./0.bundle.js',
	'./1.bundle.js',
	'./2.bundle.js',
	'./3.bundle.js',
	'./manifest.json',
  './assets/favicon-16.png',
  './assets/favicon-32.png',
	'./assets/favicon-192.png',
	'./assets/dashboard.png',
  './assets/video.png',
  './assets/video.mp4',
];

//Adding 'install' event listener
self.addEventListener('install', function (event) {
  console.log('Event: Install');

  event.waitUntil(
  	//Open the cache
  	caches.open(cacheName)
  		.then(function (cache) {
  			//Adding the files to cache
  			return cache.addAll(filesToCache)
  				.then(function () {
  					console.log("All files are cached.");
            return self.skipWaiting(); //To forces the waiting service worker to become the active service worker
  				})
  		})
  		.catch(function (err) {
  			console.log(err)
  		})
	);
});

//Adding 'activate' event listener
self.addEventListener('activate', function (event) {
  console.log('Event: Activate');

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cache) {
          if (cache !== cacheName) {     //cacheName = 'cache-v1'
            return caches.delete(cache); //Deleting the cache
          }
        })
      );
    })
  );

  return self.clients.claim(); //To activate this SW immediately without waiting.
});

//Adding 'fetch' event listener
self.addEventListener('fetch', function (event) {
	console.log('Event: Fetch');
  var request = event.request;

  //Tell the browser to wait for network request and respond with below
  event.respondWith(
    //If request is already in cache, return it
    caches.match(request).then(function(response) {
      if (response) {
				// update cache
				fetch(request).then(function(response) {
	        var responseToCache = response.clone(); //Cloning the response stream in order to add it to cache
	        caches.open(cacheName).then(
	          function(cache) {
	            cache.put(request, responseToCache); //Adding to cache
	          });
					});

        return response;
      }

      //else add the request to cache and return the response
      return fetch(request).then(function(response) {
        var responseToCache = response.clone(); //Cloning the response stream in order to add it to cache
        caches.open(cacheName).then(
          function(cache) {
            cache.put(request, responseToCache); //Adding to cache
          });

        return response;
      });
    })
  );
});
