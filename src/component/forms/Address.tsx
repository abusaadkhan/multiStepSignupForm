import {  IAddressFormProps } from '../../utilities/allInterface'

const Address = ({addOne, addTwo, city, state, pincode, country, updateFields}: IAddressFormProps) => {
    return(
        <div className='flex flex-col    '>
          <div className='flex flex-col'>
            <label className='text-[16px] mb-[10px]'>Address:</label>
            <input className="p-[3%] bg-[#F5F5F5] rounded-[10px]" type='text' placeholder='Enter Address' value={addOne} onChange={e => updateFields({addOne : e.target.value})} />
          </div>

          <div className='flex flex-col mt-[20px]'>
            <label className='text-[16px] mb-[10px]'>Address:</label>
            <input className="p-[3%] bg-[#F5F5F5] rounded-[10px]" type='text' placeholder='Enter Address' value={addTwo} onChange={e => updateFields({addTwo : e.target.value})} />
          </div>

          <div className='flex flex-col mt-[20px]'>
            <label className='text-[16px] mb-[10px]'>City:</label>
            <input className="p-[3%] bg-[#F5F5F5] rounded-[10px]" type='text' placeholder='Enter City' value={city} onChange={e => updateFields({city : e.target.value})} />
          </div>

          <div className='flex flex-col mt-[20px]'>
            <label className='text-[16px] mb-[10px]'>State:</label>
            <input className="p-[3%] bg-[#F5F5F5] rounded-[10px]" type='text' placeholder='Enter state ' value={state} onChange={e => updateFields({state : e.target.value})} />
          </div>

          <div className='flex flex-col mt-[20px]'>
            <label className='text-[16px] mb-[10px]'>Pincode:</label>
            <input className="p-[3%] bg-[#F5F5F5] rounded-[10px]" type='number' placeholder='Enter pincode ' value={pincode} onChange={e => updateFields({pincode : parseInt(e.target.value)})} />
          </div>

          <div className='flex flex-col my-[20px]'>
            <label className='text-[16px] mb-[10px]'>Country:</label>
            <input className="p-[3%] bg-[#F5F5F5] rounded-[10px]" type='text' placeholder='Enter ' value={country} onChange={e => updateFields({country : e.target.value})} />
          </div>
        </div>
    )
} 

export default Address