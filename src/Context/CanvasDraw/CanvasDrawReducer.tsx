
interface IState {
    color: string,
    brushRadius: number
}

type IAction = 
 | {
    type: 'CHANGE_COLOR',
    payload: {
        color: string
    },
} | {
    type: 'CHANGE_BRUSHRADIUS',
    payload: {
        newRadius: number
    },
}

export const initialState: IState = {
    color: "#2e22b3",
    brushRadius: 10
}

export default (state:IState, action:IAction):IState =>{

    switch (action.type) {
        case "CHANGE_COLOR":
                return { ...state,  color: action.payload.color}
        case "CHANGE_BRUSHRADIUS":
                return {...state, brushRadius: action.payload.newRadius}
        default:
            return {...state}
    }

}