import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Custom from './Custom.jsx'

ReactDOM.createRoot(document.getElementById('newroot')).render(
  <React.StrictMode>
    <App />
    <Custom/>
  </React.StrictMode>,
)
