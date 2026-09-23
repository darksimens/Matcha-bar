import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Убедитесь, что импорт есть
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Matcha-bar"> {/* Добавлено basename */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)