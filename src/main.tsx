import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>

        <App />
        {/* <ToastContainer position="top-right" autoClose={5000} /> */}
     
  </BrowserRouter>
</React.StrictMode>
)
