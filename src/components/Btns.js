import React from "react";
import {TextField} from '@material-ui/core';
import {useFormikContext} from 'formik';
import Button from '@material-ui/core/Button';



const LoginButton = (text , ...otherProps) => {
    
    const {submitForm} = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configButton = {
       variant: 'contained',
        color: 'primary',
        fullWidth: true,
        
        onClick: handleSubmit,
    }

    return (
        <div>
            <Button
            
        {...configButton }
        >
           Login
        </Button >
        </div>
    )
}

export default LoginButton;