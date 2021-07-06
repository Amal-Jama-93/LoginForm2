import React from "react";
import {TextField} from '@material-ui/core';
import {useField} from 'formik';

const LoginTextField = ({name, ...otherProps}) => {
    const [field, mata] = useField(name)
    const configTextField = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'filled'
    };

    if (mata && mata.touched && mata.error) {
        configTextField.error = true;
        configTextField.helperText = mata.error;
    }

    return (
        <TextField {...configTextField}/>
    );
};

export default LoginTextField;