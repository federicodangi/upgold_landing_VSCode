/**
 * YouTube Facade - Lazy Load YouTube iframes
 * Migliora Performance PageSpeed riducendo ~500KB di risorse YouTube
 */
(function() {
  'use strict';

  // Inizializza tutte le facade al caricamento DOM
  function init() {
    const facades = document.querySelectorAll('.youtube-facade');
    facades.forEach(createFacade);
  }

  function createFacade(facade) {
    const videoId = facade.dataset.videoId;
    if (!videoId) return;

    // Crea thumbnail immagine
    const thumbnail = document.createElement('img');
    thumbnail.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    thumbnail.alt = 'Video thumbnail';
    thumbnail.loading = 'lazy';
    thumbnail.className = 'w-full h-full object-cover';

    // Crea pulsante play
    const playButton = document.createElement('button');
    playButton.className = 'absolute inset-0 flex items-center justify-center group';
    playButton.setAttribute('aria-label', 'Riproduci video');
    playButton.innerHTML = `
      <svg class="w-20 h-20 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
           fill="currentColor" viewBox="0 0 84 84">
        <circle cx="42" cy="42" r="38" fill="#EC1B24" opacity="0.9"></circle>
        <polygon points="35,28 35,56 57,42" fill="white"></polygon>
      </svg>
    `;

    // Aggiungi elementi alla facade
    facade.appendChild(thumbnail);
    facade.appendChild(playButton);

    // Al click, sostituisci con iframe reale
    playButton.addEventListener('click', function() {
      loadYouTubeIframe(facade, videoId);
    }, { once: true });
  }

  function loadYouTubeIframe(facade, videoId) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&color=white`;
    iframe.title = 'Video di presentazione UpGold';
    iframe.className = 'w-full h-full';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.style.border = '0';

    // Rimuovi facade e inserisci iframe
    facade.innerHTML = '';
    facade.appendChild(iframe);
  }

  // Inizializza quando DOM è pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
