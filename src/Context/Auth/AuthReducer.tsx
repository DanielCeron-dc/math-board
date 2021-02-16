interface IState {
    user: IUser | null,
}

export interface IUser {
    displayName: string | null,
    photoURL: string | null,
    email: string | null,
    uid : string
}

type IAction = 
 | {
    type: 'CHANGE_USER_STATE',
    payload: {
        user:IUser|null,
    },
}

export const initialState:IState = {
    user: null
}

export default (state:IState, action:IAction):IState =>{

    switch (action.type) {
        case "CHANGE_USER_STATE":
                return {user: action.payload.user}
        default:
            return {...state}
    }

}