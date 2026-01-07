import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Animated Title
const titles = [
  '✨ Sweet Harmony Spa',
  '💆‍♀️ Pieles reales no perfectas',
  '🌸 Tu momento de recuperar tú amor propio',
  '💅 Tratamientos faciales y de rejuvenecimiento de la piel',
  '🧘‍♀️ Masajes de reducción',
  '💖 Agenda tu cita hoy'
];

let currentTitleIndex = 0;

const animateTitle = () => {
  document.title = titles[currentTitleIndex];
  currentTitleIndex = (currentTitleIndex + 1) % titles.length;
};

// Change title every 3 seconds
setInterval(animateTitle, 5000);
animateTitle(); // Set initial title

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
