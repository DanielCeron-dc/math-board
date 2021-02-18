import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import {CanvasDrawContext} from "../Context/CanvasDraw/CanvasDrawContext";
import { Convert } from '../tools/Convert';
import { IDrawInfo } from '../hooks/useDB';
import { AuthContext } from '../Context/Auth/AuthContext';

import useDb from "../hooks/useDB";

let evitOnChange:Boolean = false;
let counter = 0;  
let totalLines = 0; 

const CustomCanvasDraw:React.FC= () => {
    const {color, brushRadius} = useContext(CanvasDrawContext);
    const {user} = useContext( AuthContext);
    const canvasRef = useRef<CanvasDraw>(null); 
    const [hideMouse, sethideMouse] = useState(false); 

    const [GlobalCanvas, updateCanvasFromActualUser] = useDb(user?.uid ? user?.uid : "" ); 

    useEffect(() => {
        GlobalCanvas.height = 700;
        GlobalCanvas.width = 900; 
        totalLines = GlobalCanvas.lines.length; 
         
        canvasRef.current?.loadSaveData(Convert.IDrawInfoToJson(GlobalCanvas), true); 
        counter++;
        console.log(counter);
        evitOnChange = true;
    }, [GlobalCanvas])

    const onChange = useCallback(
        async() => {
            if (totalLines> 0){
                totalLines = totalLines -1;
                console.log(totalLines);
                return;
            }
            let newValue:string = canvasRef.current?.getSaveData() ? canvasRef.current?.getSaveData() : "";
            let value:IDrawInfo =  Convert.toIDrawInfo(newValue); 

            console.log(value);
            
            
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
export default React.memo(CustomCanvasDraw, () => true);