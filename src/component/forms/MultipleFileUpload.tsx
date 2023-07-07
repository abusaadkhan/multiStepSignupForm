import {  useEffect, useState } from "react";

import { IMultipleFileUploadFormProps } from '../../utilities/allInterface'

const MultipleFileUpload = ({updateFields}: IMultipleFileUploadFormProps) => {

    //const [currentFile, setCurrentFile] = useState<File>();
    const [city,setCity] = useState<string>('')

    
    const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        const selectedFiles = files as FileList;

        let file = selectedFiles?.[0]
        let fileName = selectedFiles?.[0].name.toLowerCase()

        if(fileName.endsWith('.pdf') || fileName.endsWith('.png')){
            let base64String 
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend= () =>{
                let fileString:any = reader.result
                base64String = fileString.replace('data:', '').replace(/^.+,/, '')
                console.log('base64string:',base64String);
            }
            
            
            console.log("selected files:",selectedFiles?.[0])
            updateFields({multipleFile:selectedFiles?.[0]})
            //setCurrentFile(selectedFiles?.[0])
        }
        else{
            alert('you can upload png or pdf files only.')
            
        }
        //setCurrentFile(selectedFiles?.[0]);
    }

    const getCity = (coordinates:string[]) =>{
        let lat = coordinates[0]
        let lng = coordinates[1]
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
            .then(res=>{
               return res.json()
             })
            .then(data=>{
                console.log('city',data.city)
                updateFields({location:data.city})
                setCity(data.city)
            })
            .catch(err => {
                console.log('cant fetch city',err)
            })
    }
    
    
    const handleLocation = async () => {
        navigator.geolocation.getCurrentPosition((pos)=>{
            let coordinates = pos.coords
            let lat = coordinates.latitude.toString() 
            let lng = coordinates.longitude.toString() 
            let cor = [lat,lng]
            getCity(cor)
                
            console.log("LOCATRION:",pos.coords)
        },(err)=>{
            console.log('failed to get location',err)
        })
    }

    useEffect(()=>{
        handleLocation()
    },[])

    return(
        <div className='mb-[20px]' >

            <div className='flex flex-col '>
                <label className='text-[16px] mb-[10px]' >Uplaod File:</label>
                <input className="p-[3%] bg-white rounded-[10px]" type="file" multiple required onChange={selectFile} accept='.png,.pdf' />
            </div>
            <div className='flex flex-col mt-[20px]'>
                <label className='text-[16px] mb-[10px]'>City:</label>
                <input className="p-[3%] bg-[#F5F5F5] rounded-[10px]" type='text' placeholder='Enter Email' value={city} />
        </div>
        </div>
    )
}

export default MultipleFileUpload