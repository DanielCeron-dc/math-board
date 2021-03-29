import React, { useContext } from 'react';
import Row from './Position/Row';

import {singOutFromGoogle} from "../firebase";
import Button from './UI/Button';
import { AuthContext } from '../Context/Auth/AuthContext';
import DisplayName from './DisplayName';

type TopBarProps = {
    
};

const TopBar:React.FC<TopBarProps> = () => {

     const {user} = useContext(AuthContext); 
     let displayName:string = user?.displayName  ?  user?.displayName : "";
     let photo:string = user?.photoURL  ?  user?.photoURL : "";
    
    
    return <div style = {{
        backgroundColor: "white",
        borderRadius: 50,
        padding: 8,
        margin: 10
    }}><Row>
            <Button onClick = {singOutFromGoogle} > Log out </Button>
            <DisplayName name = {displayName} photo = {photo} />
    </Row></div>
}
export default TopBar;