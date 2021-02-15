import {createContext} from 'react'

interface ICanvasDraw {
    color: string,
    brushRadius: number, 
    changeColor: (newColor:string) => void
    changeBrushRadius: (brushRadius:number) => void
}

export const CanvasDrawContext = createContext<ICanvasDraw> ({color: "#2e22b3", brushRadius: 0, changeColor:()=>{}, changeBrushRadius: ()=>{}}); 


