//import { useState } from 'react'

import './App.css'
//import UserForm from './component/UserForm'
//import SingleFileUpload from './component/forms/SingleFileUpload'
//import Signin from './component/Signin'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Outlet/>
      {/* <Signin/> */}
      {/* <UserForm/> */}
      {/* <SingleFileUpload/> */}
    </>
  )
}

export default App
