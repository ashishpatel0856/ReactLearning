import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalState from './contexts/index.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalState>
    <App />
  </GlobalState>
)
