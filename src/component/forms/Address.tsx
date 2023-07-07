import {  IAddressFormProps } from '../../utilities/allInterface'

const Address = ({addOne, addTwo, city, state, pincode, country, updateFields}: IAddressFormProps) => {
    return(
        <>
        <div>
        <label>Address:</label>
        <input type='text' placeholder='Enter Address' value={addOne} onChange={e => updateFields({addOne : e.target.value})} />
      </div>
      <div>
        <label>Address:</label>
        <input type='text' placeholder='Enter Address' value={addTwo} onChange={e => updateFields({addTwo : e.target.value})} />
      </div>
      <div>
        <label>City:</label>
        <input type='text' placeholder='Enter City' value={city} onChange={e => updateFields({city : e.target.value})} />
      </div>
      <div>
        <label>State:</label>
        <input type='text' placeholder='Enter state ' value={state} onChange={e => updateFields({state : e.target.value})} />
      </div>
      <div>
        <label>Pincode:</label>
        <input type='number' placeholder='Enter pincode ' value={pincode} onChange={e => updateFields({pincode : parseInt(e.target.value)})} />
      </div>
      <div>
        <label>Country:</label>
        <input type='text' placeholder='Enter ' value={country} onChange={e => updateFields({country : e.target.value})} />
      </div>
        </>
    )
} 

export default Address