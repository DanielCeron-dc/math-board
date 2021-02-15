import React, { useContext } from 'react';
import { ColorResult, SketchPicker } from 'react-color';
import { CanvasDrawContext } from '../Context/CanvasDraw/CanvasDrawContext';



const ColorPicker:React.FC = () => {    
    const {color, changeColor} = useContext(CanvasDrawContext);

    const changeColorPicker = (color:ColorResult) => {
        changeColor(color.hex)
    }

    return <SketchPicker
    color={ color }
    onChangeComplete={changeColorPicker}
  />
}
export default ColorPicker;