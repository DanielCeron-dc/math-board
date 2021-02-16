import React, {useCallback, useEffect, useReducer} from 'react';
import { AuthContext } from './AuthContext';
import AuthReducer, {initialState, IUser} from './AuthReducer';
import {auth} from "../../firebase";

const Index:React.FC = (props) => {
    
    const [state, dispatch] = useReducer(AuthReducer, initialState); 

    useEffect(() => {
        let unsubscribeFromAuth = auth.onAuthStateChanged((user:IUser|null) => {
            console.log( "AuthProvider:" + user?.uid);
            
            dispatch({type: "CHANGE_USER_STATE", payload: {user}});
        });
        return ()=>{
            unsubscribeFromAuth();
        }
    }, []); 



    return <AuthContext.Provider value = {{user: state.user}} > 
        {props.children}
    </AuthContext.Provider>
}
export default Index;