import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import styling of milligram
import 'milligram'

// import and setup our router
import { RouterProvider } from 'react-router-dom'

// import the router
import router from "./router.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Replace with the RouterProvider */}
    {/* Everything you do, must go through the router */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
