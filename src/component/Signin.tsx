import * as React from 'react';
//import { User } from '../utilities/allInterface'
import { authenticate, signIn } from '../auth/index';
import { useNavigate } from 'react-router-dom'


const Signin = () => {

    const[email,setEmail] = React.useState<string>("levitation@levitation.in")
    const[password,setPassword] = React.useState<string>("levitation")
    

   const navigate = useNavigate()

    
    const handleEmail = (event:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
 
    const onSignIn = (email:string,password:string) => {
        signIn(email,password)
            .then(data =>{
                if(data.authToken){
                    console.log('signin successfull',data)
                    authenticate(data,()=>{
                        navigate("/userForm")
                       
                    })
                }
                else{
                    console.log('SIGNIN failed',data)
                }
            })
            .catch(err=>{
                console.log('ERROR while calling signin',err)
            })
    }

  return (
    <div className=' flex justify-center  w-full h-screen ' >
      <div className='w-[40%] h-[40%]  ' >
        <div>
            <label className=' w ' >Email</label>
            <input value={email} type='email' placeholder='enter Email' onChange={handleEmail} />
        </div>
        <div>
            <label>Password</label>
            <input value={password} type='password' placeholder='Enter password' onChange={handlePassword} />
        </div>
        <button onClick={()=>onSignIn(email,password)}  >Sign In</button>
      </div>
    </div>
  );
}

export default Signin