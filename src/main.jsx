import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider,  createBrowserRouter } from "react-router-dom"
import Login from './component/login.jsx'
const router=createBrowserRouter([{path:"/", element: <App />},
{path:"/login",element:<Login/>}])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
