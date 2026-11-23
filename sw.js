// 醫師排班 Service Worker：只為了讓 Android 出現「安裝」提示，不快取任何資料（班表永遠是最新的）
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
