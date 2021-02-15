import React from 'react';
import { Login } from "../../Components/Forms"; 
import Form from '../../Components/Forms/Form';
import useForm from '../../Components/Forms/useForm';

const LoginForm:React.FC = () => {
    
    const [loginFormState, updateLoginForm, cleanLoginForm] = useForm(Login);

    return <div style = {{backgroundColor:"grey", padding : "20px"}}>
        <h1>Login</h1>
        <Form form = {loginFormState} updateValues = {updateLoginForm} submit = {cleanLoginForm}  />
    </div>
}
export default LoginForm;