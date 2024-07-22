import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Signup from './Signup'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
