import React, { useEffect } from 'react';
import Row from '../../Components/Position/Row';
import Spacer from '../../Components/Position/Spacer';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';


const Auth:React.FC = () => {

    return <Row>
        <Spacer />
        <LoginForm/>
        <Spacer  width = {20}/>
        <RegisterForm/>
        <Spacer  width = {20}/>
    </Row>
    
    
    
}
export default Auth;