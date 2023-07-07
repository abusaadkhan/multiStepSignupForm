//import { useState, useEffect } from "react";
import { ISingleFileUploadFormProps } from '../../utilities/allInterface'

const SingleFileUpload = ({updateFields}: ISingleFileUploadFormProps) => {

    //const [currentFile, setCurrentFile] = useState<File>();
    
    const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        const selectedFiles = files as FileList;

        let file = selectedFiles?.[0]
        let fileName = selectedFiles?.[0].name.toLowerCase()

        if(fileName.endsWith('.pdf') || fileName.endsWith('.png')){
            // let base64String 
            // let binaryString
            // const reader = new FileReader()
            
            // reader.onload= () =>{
            //     // let fileString:any = reader.result
            //     // base64String = fileString.replace('data:', '').replace(/^.+,/, '')
            //     // binaryString = atob(base64String)
            //     //console.log('binarystring:',reader.result);
            // }
            // reader.readAsBinaryString(file)
            
            console.log("selected files:",selectedFiles?.[0])
            updateFields({singleFile:selectedFiles?.[0]})
            //setCurrentFile(selectedFiles?.[0])
        }
        else{
            alert('you can upload png or pdf files only.')
            
        }
        //setCurrentFile(selectedFiles?.[0]);
    }

    return(
        <div className='mb-[20px]' >
        <div className='flex flex-col '>
            <label className='text-[16px] mb-[10px]' >Uplaod File:</label>
            <input className="p-[3%] bg-white rounded-[10px]" type="file" required onChange={selectFile}  accept='.png,.pdf' />
        </div>
        </div>
    )
}

export default SingleFileUpload