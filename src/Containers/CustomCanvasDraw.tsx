import React, { useCallback, useContext, useEffect, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { firestore } from "../firebase";

import {CanvasDrawContext} from "../Context/CanvasDraw/CanvasDrawContext";
import PageDimensionContext from '../Context/PageDimensions/PagedimensionsContext';



const CustomCanvasDraw:React.FC= () => {
    const {color, brushRadius} = useContext(CanvasDrawContext);
    const {windowHeight, windowWidth} = useContext(PageDimensionContext); 
    let canvasFromFirestore: string = ""; 
    const canvasRef = useRef<CanvasDraw>(null); 

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
            canvasFromFirestore = snapshot.data()?.savedCanvas;
            canvasRef.current?.loadSaveData(canvasFromFirestore);
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
    

    return <CanvasDraw 
    brushRadius = {brushRadius} 
    brushColor = {color} 
    saveData={ canvasFromFirestore}
    canvasHeight = {windowHeight*0.8} 
    canvasWidth = {windowWidth*0.65} 
    immediateLoading
    ref = {canvasRef}
    onChange ={() => onChange()}
    />
}
export default CustomCanvasDraw;