interface IState {
    user: any
}

type IAction = 
 | {
    type: 'CHANGE_USER_STATE',
    payload: {
        user: any
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