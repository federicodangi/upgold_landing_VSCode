// UpGold Thank You Page - JavaScript

// Configurazione
const PHONE_NUMBER = '+393925241891';

// Utility function per tracking analytics
function trackEvent(eventName, eventData = {}) {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      'event': eventName,
      ...eventData
    });
  }
}

// Funzione: Copia numero di telefono
function initCopyPhoneButton() {
  const copyPhoneBtn = document.getElementById('copyPhoneBtn');
  const copyBtnText = document.getElementById('copyBtnText');

  if (!copyPhoneBtn || !copyBtnText) return;

  copyPhoneBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(PHONE_NUMBER);

      // Feedback visivo
      copyPhoneBtn.classList.add('copied');
      copyBtnText.textContent = 'Copiato!';

      // Analytics tracking
      trackEvent('phone_number_copied', {
        'phone_number': PHONE_NUMBER
      });

      // Reset dopo 2 secondi
      setTimeout(() => {
        copyPhoneBtn.classList.remove('copied');
        copyBtnText.textContent = 'Copia numero';
      }, 2000);
    } catch (err) {
      console.error('Errore nella copia:', err);
      copyBtnText.textContent = 'Errore!';
      setTimeout(() => {
        copyBtnText.textContent = 'Copia numero';
      }, 2000);
    }
  });
}

// Funzione: Track page view
function trackPageView() {
  trackEvent('thank_you_page_view', {
    'page_title': document.title,
    'page_path': window.location.pathname
  });
}

// Inizializzazione quando il DOM è pronto
document.addEventListener('DOMContentLoaded', () => {
  initCopyPhoneButton();
  trackPageView();
});
