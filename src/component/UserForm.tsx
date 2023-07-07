import { FormEvent, useState } from "react"
import { IFormData  } from '../utilities/allInterface'
import { useMultistepForm } from '../utilities/useMultistepForm'
import BasicDetails from "./forms/BasicDetails"
import Address from "./forms/Address"
import SingleFileUpload from "./forms/SingleFileUpload"
import MultipleFileUpload from "./forms/MultipleFileUpload"
import { signUp } from "../auth"
import ProgressBar from "./ProgressBar"

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
        multipleFile: null,
        location: ""
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
        <MultipleFileUpload {...data} updateFields={updateFields}  />
    ])

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if (!isLastStep) return next()
        alert("Successful Account Creation")
        signUp(data)
            .then(res =>{
                    console.log('responseeeeee',res)
                }
                
            )
            .catch(err=>{
                console.log('ERROR while calling signin',err)
            })
      }

    return(
        <>
            <div>
                <div>
                    <ProgressBar index={currentStepIndex+1} />
                </div>
                <form onSubmit={onSubmit} >
                    <div>{currentStepIndex + 1} / {steps.length}</div>
                    {step}
                    <div>
                        {!isFirstStep && (<button type="button" onClick={back}>Back</button>)}
                        <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UserForm