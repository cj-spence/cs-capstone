import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div data-theme="light"> {/* Change to any theme name */}
      <App />
    </div>
  </React.StrictMode>
)