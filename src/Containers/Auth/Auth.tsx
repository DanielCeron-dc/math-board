import React, { useCallback, useContext, useEffect } from 'react';
import Row from '../../Components/Position/Row';
import Spacer from '../../Components/Position/Spacer';
import TreeDButton from '../../Components/UI/3dButton/3dButton';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import {signInWithGoogle} from "../../firebase";
import Center from '../../Components/Position/Center';
import PageDimensionContext from '../../Context/PageDimensions/PagedimensionsContext';


const Auth:React.FC = () => {

    const {windowHeight} = useContext(PageDimensionContext); 

    const onCLickHandler = useCallback(
        () => {
            signInWithGoogle(); 
        },
        [],
    );
 
    return <Center heightAvailable={(windowHeight)}>
         <Row>
            <Spacer/>
            <Spacer/>
            <TreeDButton onClick = {onCLickHandler}><h1>G</h1></TreeDButton> 
            <Spacer/>
        </Row>

    </Center>
    
   
    
    
    
}
export default Auth;