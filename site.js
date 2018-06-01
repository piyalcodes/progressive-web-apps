

if (ServiceWorker) {
   navigator.serviceWorker.register('http://localhost:8585/service-worker/sw.js').then(function (registration) {
      console.log('Service worker registration succeeded:', registration);
   }).catch(function (error) {
      console.log('Service worker registration failed:', error);
   });
}

window.onload = function () {
   alert('1')
   if (!navigator.onLine) {
      alert('2')
      console.log("You are getting an offline content.");
      console.log(document.getElementById('offlineMsg'));
      if (document.getElementById('offlineMsg')) {
         document.getElementById('offlineMsg').style.display = 'block';
      }
   }
};
