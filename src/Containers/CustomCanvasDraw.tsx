import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';

import {CanvasDrawContext} from "../Context/CanvasDraw/CanvasDrawContext";
import PageDimensionContext from '../Context/PageDimensions/PagedimensionsContext';
import { Convert } from '../tools/Convert';
import { IDrawInfo, Line } from '../hooks/useDB';
import { AuthContext } from '../Context/Auth/AuthContext';

import useDb from "../hooks/useDB";



const CustomCanvasDraw:React.FC= () => {
    const {color, brushRadius} = useContext(CanvasDrawContext);
    const {windowHeight, windowWidth} = useContext(PageDimensionContext); 
    const {user} = useContext( AuthContext);
    const canvasRef = useRef<CanvasDraw>(null); 
    const [hideMouse, sethideMouse] = useState(false); 

    const [GlobalCanvas, updateCanvasFromActualUser] = useDb(user?.uid ? user?.uid : "" ); 

    let evitOnChange:Boolean = false; 

    useEffect(() => {
        GlobalCanvas.height = 700;
        GlobalCanvas.width = 900; 
        canvasRef.current?.loadSaveData(Convert.IDrawInfoToJson(GlobalCanvas)); 
        evitOnChange = true;
        
    }, [GlobalCanvas])

    const onChange = useCallback(
        async() => {
            if (evitOnChange){
                console.log("se evitó el onchange");
                setTimeout(() => {
                    evitOnChange = false; 
                    
                }, 500);
                return;
            }


            let newValue:string = canvasRef.current?.getSaveData() ? canvasRef.current?.getSaveData() : "";
            let value:IDrawInfo =  Convert.toIDrawInfo(newValue); 
            
            if (value && user?.uid){
                updateCanvasFromActualUser( value , user?.uid );
                evitOnChange = true; 
            }
            console.log(value);
        },
        [],
    ); 

    return <div style = {{ cursor: hideMouse ? "crosshair" : "initial"}} onMouseOver = {() =>sethideMouse(true)} onMouseLeave = {() => sethideMouse(false)}>
                <CanvasDraw 
                
        brushRadius = {brushRadius} 
        brushColor = {color} 
        lazyRadius = {0}
        canvasHeight = {700} 
        canvasWidth = {900} 
        immediateLoading
        hideInterface
        ref = {canvasRef}
        onChange ={() => onChange()}
        />
        </div>
}
export default CustomCanvasDraw;