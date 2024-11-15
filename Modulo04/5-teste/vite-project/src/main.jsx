import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Para from './Para.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header />
    <App />
    <Para/>
    <App  />
  
  </StrictMode>
)
