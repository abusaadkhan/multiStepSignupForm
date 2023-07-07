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
    phone: string;
    addOne: string;
    addTwo: string;
    city: string;
    state: string;
    pincode : any;
    country: string;
    location: string;
    singleFile : any;
    multipleFile : any;
}

export interface IBasicDetails{
    userName: string;
    email: string;
    phone: string | number; 
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
    multipleFile: null | File[] | FileList[]
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
