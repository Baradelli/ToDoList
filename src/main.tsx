import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ScrollToTop />
  </React.StrictMode>
)
