//js/app.js

// Verifica se o navegador suporta Service Workers
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((registration) => {
                // Registro foi bem-sucedido!
                console.log('Service Worker registrado com sucesso:', registration.scope);
            })
            .catch((error) => {
                // O registro falhou
                console.log('Falha ao registrar o Service Worker:', error);
            });
    });
}
