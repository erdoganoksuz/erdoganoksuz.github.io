self.addEventListener('fetch', function (event) {
  var req = event.request.clone();
  if (req.clone().method == "GET") {
    console.log("heyyy");
    event.respondWith(

      // Get the response from the network
      fetch(req.clone()).then(function (response) {
        // And store it in the cache for later
        return cache.put(req.clone(), response);
      })
    );
  }
});