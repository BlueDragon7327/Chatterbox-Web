self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Listen for push notifications even when the app isn’t open.
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Chatterbox Notification';
  const options = {
    body: data.body || 'You have a new message!',
    icon: data.icon || 'icon-192.png'
  };
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
