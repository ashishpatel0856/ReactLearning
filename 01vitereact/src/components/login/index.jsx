import React, { useState } from 'react'
import CommonForm from '../common-form';
import { loginFormElements } from '../config';


const initialFormData = {
    email: "",
    password: "",
}
const LoginComponent = () => {
    const [loginFormData, setLoginFormData] = useState( initialFormData
        // {
        // email: '',
        // password: ''
    // }
);


    function onHandleSubmit(event) {
        event.preventDefault();
        console.log(loginFormData, "loginFormData")

        // api logic and database logic
        setLoginFormData(initialFormData)
    }
    return (
        <div>
            <h1>Login page/component</h1>
            <CommonForm
                formData={loginFormData}
                setFormData={setLoginFormData}
                formControls={loginFormElements}
                buttonText={'login'}
                onHandleSubmit={onHandleSubmit}
            />
        </div>
    );
}

export default LoginComponent