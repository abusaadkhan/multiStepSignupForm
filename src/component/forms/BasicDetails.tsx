import {  IBasicDetailsFormProps } from '../../utilities/allInterface'

const BasicDetails = ({userName, email, phone, updateFields}: IBasicDetailsFormProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFields({userName: event.target.value})
    }

    return(
        <>
        <div>
            <label>User Name:</label>
            <input autoFocus required type='text' placeholder='Enter User Name' value={userName} onChange={handleChange} />
        </div>
        <div>
            <label>Email:</label>
            <input type='email' placeholder='Enter Email' value={email} onChange={e => updateFields({email:e.target.value})} />
        </div>
        <div>
            <label>Phone:</label>
            <input placeholder='Enter Phone Number' value={phone} onChange={e => updateFields({phone:e.target.value})} />
        </div>
        </>
    )
} 

export default BasicDetails