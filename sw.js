// sw.js
const CACHE_NAME = 'hub-ma-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/style.css',
    './js/app.js',
    './manifest.json'
];

// Evento de Instalação: Salva os arquivos essenciais no cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Service Worker: Armazenando arquivos no cache');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Evento de Ativação: Limpa caches antigos, se houver
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Ativado com sucesso');
});

// Evento de Busca (Fetch): Serve os arquivos do cache quando offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});