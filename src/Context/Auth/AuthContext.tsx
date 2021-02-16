import {createContext} from 'react';
import { IUser } from './AuthReducer';

interface IAuth {
    user:IUser|null,
}

export const AuthContext = createContext<IAuth>({user: null});

