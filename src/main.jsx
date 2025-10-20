import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 🌑 Mensaje inicial estilo metalero en consola
console.log(
  '%c⚡ DKT QR Generator ⚡',
  'color:#b91c1c; font-size:18px; font-family:Metal Mania, monospace; text-shadow:0 0 8px #9f00ff;'
)
console.log('%c🤘 Ready to forge some QR codes, warrior!', 'color:#9f00ff;')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
