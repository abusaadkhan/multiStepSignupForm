import * as React from 'react';
//import { User } from '../utilities/allInterface'

import { IFormData } from '../../utilities/allInterface';


const FormStatus = ( {userName,email,phone,addOne,addTwo,city,state,pincode,country,formStatus}:Partial<IFormData> ) => {

    return (
    <div className="w-full  h-full flex flex-col  justify-center " >
    <div className='p-2' >UserName: {userName}</div>
    <div className='p-2'>Email: {email}</div>
    <div className='p-2'>Phone Number:{phone}</div>
    <div className='p-2'>Address1: {addOne}</div>
    <div className='p-2'>Address2: {addTwo}</div>
    <div className='p-2'>City: {city}</div>
    <div className='p-2'>State: {state}</div>
    <div className='p-2'>Pincode: {pincode}</div>
    <div className='p-2'>Country: {country}</div>
  </div>  
  );
}

export default FormStatus