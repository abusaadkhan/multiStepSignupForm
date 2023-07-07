import * as React from 'react';
//import { User } from '../utilities/allInterface'
import { authenticate, signIn } from '../auth/index';
import { useNavigate } from 'react-router-dom'


const ForgotPassword = () => {

    const[email,setEmail] = React.useState<string>("")
    const[password,setPassword] = React.useState<string>("")
    

   return (
    <div className="w-full  h-full flex flex-col items-center justify-center " >
      <div className="bg-white w-[60%] max-[768px]:w-[80%] max-[480px]:w-full p-10 rounded-2xl " >
        <div className='flex flex-col'>
            <div  className='flex flex-col'>
                <label  className='text-[16px] mb-[10px]' >Email</label>
                <input className="p-[3%] bg-[#F5F5F5] rounded-[10px]" value={email} type='email' placeholder='enter Email'  />
            </div>
            <div className='flex flex-col my-[20px]'>
                <label  className='text-[16px] mb-[10px]' >Password</label>
                <input className="p-[3%] bg-[#F5F5F5] rounded-[10px]" value={password} type='password' placeholder='Enter password' />
            </div>
        </div>
        <button className="mt-[10px] py-[2%] w-full h-[40px] rounded-[10px] flex justify-center items-center bg-black text-white font-[700] text-[16px] "   >Change Password</button>
      </div>
    </div>
  );
}

export default ForgotPassword