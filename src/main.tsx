import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './demo/App'

// Import styles - in a real barrel files lab, these would be messy imports initially
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)