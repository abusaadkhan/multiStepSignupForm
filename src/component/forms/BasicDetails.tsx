import {  IBasicDetailsFormProps } from '../../utilities/allInterface'

const BasicDetails = ({userName, email, phone, updateFields}: IBasicDetailsFormProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFields({userName: event.target.value})
    }

    return(
        <div className='flex flex-col     ' >
        <div className='flex flex-col'>
            <label className='text-[16px] mb-[10px]' >User Name:</label>
            <input className="p-[3%] bg-[#F5F5F5] rounded-[10px]" autoFocus required type='text' placeholder='Enter User Name' value={userName} onChange={handleChange} />
        </div>
        <div className='flex flex-col mt-[20px]'>
            <label className='text-[16px] mb-[10px]'>Email:</label>
            <input className="p-[3%] bg-[#F5F5F5] rounded-[10px]" type='email' placeholder='Enter Email' value={email} onChange={e => updateFields({email:e.target.value})} />
        </div>
        <div className='flex flex-col my-[20px]'>
            <label className='text-[16px] mb-[10px]'>Phone:</label>
            <input className="p-[3%] bg-[#F5F5F5] rounded-[10px]" placeholder='Enter Phone Number' value={phone} onChange={e => updateFields({phone:e.target.value})} />
        </div>
        </div>
    )
} 

export default BasicDetails