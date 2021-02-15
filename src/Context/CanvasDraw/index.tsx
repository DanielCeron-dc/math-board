import React, {useReducer} from 'react';
import { CanvasDrawContext } from './CanvasDrawContext';
import CanvasDrawReducer, {initialState} from './CanvasDrawReducer';




const Index:React.FC = (props) => {
    
    const [state, dispatch] = useReducer(CanvasDrawReducer, initialState); 

    const changeColor = (newColor:string) => {
        dispatch({type: "CHANGE_COLOR", payload: {color:newColor}});
    }

    const changeBrushRadius = (newRadius: number) => {
        dispatch({type: "CHANGE_BRUSHRADIUS", payload: {newRadius}})
    }

    return <CanvasDrawContext.Provider value = {{color: state.color, brushRadius: state.brushRadius, changeColor, changeBrushRadius}} > 
        {props.children}
    </CanvasDrawContext.Provider>
}
export default Index;