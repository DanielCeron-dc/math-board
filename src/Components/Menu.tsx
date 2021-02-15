import React, { useContext } from 'react';
import { CanvasDrawContext } from '../Context/CanvasDraw/CanvasDrawContext';
import ColorPicker from './ColorPicker';
import Column from './Position/Column';
import Spacer from './Position/Spacer';
import Button from './UI/Button';
import SliderBar from './UI/SliderBar';

type MenuProps = {
    
};

const Menu:React.FC<MenuProps> = () => {
    
    const { brushRadius, changeBrushRadius} = useContext(CanvasDrawContext);

    return <div style = {{backgroundColor: "white", width: "20%", height: "80%"}}>
        <Column>
            <h1>Menu</h1>
            <SliderBar text = "Grosor del pincel: " value = {brushRadius} onChange = {changeBrushRadius}/>
            <Spacer height = {20}/>
            <ColorPicker/>
            <Spacer height = {20}/>
            <Button onClick = {() => {}}> click </Button>
            <Spacer height = {20}/>
        </Column>
    </div>
}
export default Menu;