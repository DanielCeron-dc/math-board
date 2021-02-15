import {createContext} from 'react';

interface IAuth {
    user:any,
}

export const AuthContext = createContext<IAuth>({user: null});

