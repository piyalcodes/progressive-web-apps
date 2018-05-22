

if (ServiceWorker) {
   navigator.serviceWorker.register('http://localhost:8585/service-worker/sw.js').then(function (registration) {
      console.log('Service worker registration succeeded:', registration);
   }).catch(function (error) {
      console.log('Service worker registration failed:', error);
   });
}

if (!navigator.onLine) {
   alert("You are getting an offline content.")
}
