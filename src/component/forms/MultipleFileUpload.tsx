import {  useEffect } from "react";

import { IMultipleFileUploadFormProps } from '../../utilities/allInterface'

const MultipleFileUpload = ({updateFields}: IMultipleFileUploadFormProps) => {

    //const [currentFile, setCurrentFile] = useState<File>();

    
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
            updateFields({multipleFile:base64String})
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
        <>
        <div>
            <label>Uplaod File:</label>
            <input type="file" multiple onChange={selectFile} />
        </div>
        </>
    )
}

export default MultipleFileUpload