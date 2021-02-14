import React from 'react';
import Box from '../Components/Box';
import Column from '../Components/Position/Column';
import Row from '../Components/Position/Row';
import Spacer from '../Components/Position/Spacer';
import CanvasDraw from "react-canvas-draw";

type ContentProps = {
    
};

const Content:React.FC<ContentProps> = () => {
    
    return <Row>
            <Spacer/>
            <Box/>
            <Spacer/>
            <CanvasDraw canvasHeight = {500} canvasWidth = {500}/>
            <Spacer/>
        </Row>
    
    
    
    
    
}
export default Content;