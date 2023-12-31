import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './component/Signin.tsx'
import UserForm from './component/UserForm.tsx'
import ForgotPassword from './component/ForgotPassword.tsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path:'/',
        element: <Signin/>
      },
      {
        path: '/userForm',
        element: <UserForm/>
      },
      {
        path: '/forgotPassword',
        element: <ForgotPassword/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
