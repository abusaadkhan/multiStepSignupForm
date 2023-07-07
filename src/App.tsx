//import { useState } from 'react'

//import './App.css'
//import UserForm from './component/UserForm'
//import SingleFileUpload from './component/forms/SingleFileUpload'
//import Signin from './component/Signin'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <div className='w-full h-fit min-h-screen bg-[#f5f5f5] flex justify-center m-auto p-10 max-w-7xl  ' >
    <Outlet/>
      {/* <Signin/> */}
      {/* <UserForm/> */}
      {/* <SingleFileUpload/> */}
    </div>
  )
}

export default App
