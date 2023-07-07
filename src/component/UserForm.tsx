import { FormEvent, useState } from "react"
import { IFormData  } from '../utilities/allInterface'
import { useMultistepForm } from '../utilities/useMultistepForm'
import BasicDetails from "./forms/BasicDetails"
import Address from "./forms/Address"
import SingleFileUpload from "./forms/SingleFileUpload"
import MultipleFileUpload from "./forms/MultipleFileUpload"
import { signUp } from "../auth"
import ProgressBar from "./ProgressBar"
import FormStatus from "./forms/FormStatus"

const UserForm = () => {

    const [data,setData] = useState<IFormData>({
        userName: "",
        email: "",
        phone: "",
        addOne: "",
        addTwo: "",
        city: "",
        state: "",
        pincode : "",
        country: "",
        singleFile: null,
        location: "",
        multipleFile1: "",
        multipleFile2: "",
        multipleFile3: "",
        multipleFile4: "",
        multipleFile5: "",
        formStatus:"",
    })

    const updateFields = (fields: Partial<IFormData>) => {
        setData(prev => {
          return { ...prev, ...fields }
        })
      }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =useMultistepForm([
        <BasicDetails {...data} updateFields={updateFields} />,
        <Address {...data} updateFields={updateFields}/>,
        <SingleFileUpload {...data} updateFields={updateFields}/>,
        <MultipleFileUpload {...data} updateFields={updateFields}  />,
        <FormStatus {...data} />
    ])

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if (!isLastStep) return next()
        signUp(data)
            .then(res =>{
                    console.log('responseeeeee',res)
                    updateFields({formStatus:res.message})
                    alert(data.formStatus)
                }
                
            )
            .catch(err=>{
                console.log('ERROR while calling signin',err)
            })
      }

    return(
        <>
            <div className="w-full  h-full flex flex-col items-center " >
                <div className="mb-24 w-full" >
                    <ProgressBar index={currentStepIndex+1} />
                </div>
                <form onSubmit={onSubmit} className="bg-white w-[60%] max-[768px]:w-[80%] max-[480px]:w-full p-10 rounded-2xl "  >
                    
                    {step}
                    <div className="flex gap-10 " >
                        {!isFirstStep && (<button className="py-[2%] w-full h-[40px] rounded-[10px] flex justify-center items-center bg-black text-white font-[700] text-[16px] " type="button" onClick={back}>Back</button>)}
                        <button className="py-[2%] w-full h-[40px] rounded-[10px] flex justify-center items-center bg-black text-white font-[700] text-[16px] " type="submit">{isLastStep ? "Submit" : "Next"}</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UserForm