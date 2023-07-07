

import { AuthToken, IFormData } from '../utilities/allInterface'


export const signIn = (email:string,password:string):Promise<any> => {
    return fetch("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login",{
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email,
            password
        })
    })
    .then(res=>{
        return res.json()
        // let data = res.json()
        // console.log(data)
    })
    .catch(err=>{
        console.log("ERROR while fetching login api",err)
    })
}

export const authenticate = (data:AuthToken,next:any) => {
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt',JSON.stringify(data.authToken))
        next()
    }
}

export const signUp = (data:IFormData):Promise<any> => {
    let formData = new FormData()
    formData.append('name',data.userName);
    formData.append('email', data.email);
    formData.append('phone_number', data.phone);
    formData.append('address_1', data.addOne);
    formData.append('address_2', data.addTwo);
    formData.append('city', data.location);
    formData.append('state', data.state);
    formData.append('pincode', data.pincode);
    formData.append('country', data.country);
    formData.append('geolocation', data.city);
    formData.append('single_file', data.singleFile);
    formData.append('multi_ups1', data.multipleFile1);
    //formData.append('multi_ups2', );
   //formData.append('multi_ups3', " ");
   const token = localStorage.getItem('jwt')
    console.log('TOKEN:',token)

    const options = {
        method:'POST',
        headers:{
            // Accept: 'application/json',
            //'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
        },
        body:formData
    }
    
    return fetch("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/form",options)
    .then(res=>{
        return res.json()
        // let data = res.json()
        // console.log(data)
    })
    .catch(err=>{
        console.log("ERROR while fetching login api",err)
    })
}


// let formData = new FormData();
