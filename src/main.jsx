import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import Docs from './components/Docs.jsx'
import Product from './components/Product.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : '/',
        element : <HomePage />
      },
      {
        path : '/docs',
        element : <Docs />,
      },
      {
        path : '/docs/product',
        element : <Product />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
