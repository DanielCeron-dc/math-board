import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { firestore } from "../firebase";

import {CanvasDrawContext} from "../Context/CanvasDraw/CanvasDrawContext";
import PageDimensionContext from '../Context/PageDimensions/PagedimensionsContext';



const CustomCanvasDraw:React.FC= () => {
    const {color, brushRadius} = useContext(CanvasDrawContext);
    const {windowHeight, windowWidth} = useContext(PageDimensionContext); 
    let canvasFromFirestore: string = ""; 
    const canvasRef = useRef<CanvasDraw>(null); 
    const [hideMouse, sethideMouse] = useState(false); 

    useEffect( () => {
        let unsubscribe: () => void; 
        wait = true; 
        initializeCanvas().then((res) =>{
            unsubscribe = res; 
        }); 
        setTimeout(() => {
            wait = false;
        }, 4000);
        return () => {
            unsubscribe(); 
        }
    }, [])


    const initializeCanvas = async(): Promise<(() => void)> => {
        return await firestore.collection("board1").doc("savedCanvas").onSnapshot((snapshot) => {
            //canvasFromFirestore = snapshot.data()?.savedCanvas;
            //canvasRef.current?.loadSaveData(canvasFromFirestore);
        });
    }
        
    let wait: boolean = false; 



    const onChange = useCallback(
        async() => {
            let newValue:string|undefined = canvasRef.current?.getSaveData();
             if (newValue != canvasFromFirestore && wait == false){
                 wait = true;
                 console.log("ENTRE");
                 
                 await firestore.collection("board1").doc("savedCanvas").update({savedCanvas: newValue});
                 setTimeout(() => {
                     wait = false;
                 }, 4000);
             }},
        [],
    ) 
    

    return <div style = {{ cursor: hideMouse ? "crosshair" : "initial"}} onMouseOver = {() =>sethideMouse(true)} onMouseLeave = {() => sethideMouse(false)}>
                <CanvasDraw 
        brushRadius = {brushRadius} 
        brushColor = {color} 
        lazyRadius = {0}
        saveData={ canvasFromFirestore}
        canvasHeight = {windowHeight*0.8} 
        canvasWidth = {windowWidth*0.65} 
        immediateLoading
        hideInterface
        ref = {canvasRef}
        onChange ={() => onChange()}
        />
        </div>
}
export default CustomCanvasDraw;