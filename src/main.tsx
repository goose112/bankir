import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Убрали лишние точки и опечатку scr
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
