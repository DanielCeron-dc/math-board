import React from 'react';
import { Register } from "../../Components/Forms"; 
import Form from '../../Components/Forms/Form';
import useForm from '../../Components/Forms/useForm';


const RegisterForm:React.FC = () => {
    
    const [registerFormState, updateRegisterForm, cleanRegisterForm] = useForm(Register);

    return <div style = {{backgroundColor:"grey", padding : "20px", borderRadius: 50}}>
        <h1>Registrase</h1>
        <Form form = {registerFormState} updateValues = {updateRegisterForm} submit = {cleanRegisterForm}  />
    </div>
}
export default RegisterForm;