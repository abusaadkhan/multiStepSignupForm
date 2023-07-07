export interface User {
    email:string;
    password:string
}

export interface LoginRes {
    message:string
}

export interface AuthToken{
    authToken:string
}

export interface IFormData{
    userName: string;
    email: string;
    phone: any;
    addOne: string;
    addTwo: string;
    city: string;
    state: string;
    pincode : any;
    country: string;
    location: string;
    singleFile : any;
    multipleFile1 : any;
    multipleFile2?: any;
    multipleFile3?: any;
    multipleFile4?: any;
    multipleFile5?: any;
    formStatus?: any;
}

export interface IBasicDetails{
    userName: string;
    email: string;
    phone: any; 
}

export interface IBasicDetailsFormProps extends IBasicDetails{
    updateFields: (fields: Partial<IFormData>) => void;
}

export interface ISingleFileUpload{
    singleFile: null | File | FileList
}

export interface ISingleFileUploadFormProps extends ISingleFileUpload{
    updateFields: (fields: Partial<IFormData>) => void;
}

export interface IMultipleFileUpload{
    location: string;
    multipleFile1: any;
    multipleFile2?: any;
    multipleFile3?: any;
    multipleFile4?: any;
    multipleFile5?: any;
    
}

export interface IMultipleFileUploadFormProps extends IMultipleFileUpload{
    updateFields: (fields: Partial<IFormData>) => void;
}
export interface IinitialBasicDetails{
    basicDetails: IBasicDetails[]
}

export interface IAddress{
    addOne: string;
    addTwo: string;
    city: string;
    state: string;
    pincode : string | number;
    country: string;
}

export interface IAddressFormProps extends IAddress{
    updateFields: (fields: Partial<IAddress>) => void;
}

export interface IProgressBarProps{
    index: number
}
