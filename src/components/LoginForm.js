import React from 'react'
import { Formik,  Form} from 'formik'
import * as Yup from 'yup'
import Typography from '@material-ui/core/Typography';
import LoginTextField from './Fields';
import  LoginButton from "./Btns";
import './LoginForm.css'


const INITIAL_FORM_STATE = {
    userName : '',
    password : ''
};


const FORM_VALIDATION = Yup.object().shape({
    userName: Yup.string().required('Required'),
    password: Yup.string().required('Required')
})

const LoginForm =() => {
    
    return(
        <Formik 
        initialValues={{...INITIAL_FORM_STATE}}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
                console.log(values)
        }}
        >
        <div className="wrapper">
            <Form>
                <Typography className="login-txt">LOGIN</Typography>
                
                <div className="form-control"><LoginTextField name="userName" label="Username"/></div>
                <div className="form-control" ><LoginTextField name="password" label="Password"
                type="password"/></div>
                <div className="remember-forgot ">
                
                    <div className="check">

                    <input type="checkbox" label="ds"/>
                    <label >Remember Me</label>
                    </div>

                    <a href='#' >Forgot?</a>
                    
                </div>
                <div className="submit-btn"><LoginButton >Submit</LoginButton></div>               
            </Form>
        </div>
        </Formik>
    )
}


export default LoginForm
