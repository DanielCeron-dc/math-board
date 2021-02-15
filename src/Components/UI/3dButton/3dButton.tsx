import React, {useState} from "react"
import MiniPlane from "./MiniPlane"; 
import Move from "../../../Animations/Move"; 

const TreeDButton:React.FC<{onClick: () => void}> = (props) => {
    const [hover, setHover] = useState(false); 


    return<div onMouseOver = {() => setHover(true)} onMouseLeave = {() => setHover(false)} style = {{
        cursor: "pointer"}} onClick = {props.onClick}>
        <MiniPlane  rgba = "24, 219, 89, 0.5" profundidad/>
        <Move x = {10} y = {-15} show = {hover}>
            <MiniPlane  rgba = "24, 219, 89, 0.5"/>
        </Move>
        <Move x = {15} y = {-50} show = {hover}>
            <MiniPlane  rgba = "137, 140, 138, 0.5"/>
        </Move>
        <Move x = {35} y = {-35} show = {hover}>
            <MiniPlane  rgba = "137, 140, 138, 0.5"/>
        </Move>
        <Move x = {30} y = {-45} show = {hover}>
            <MiniPlane  rgba = "47, 47, 47, 0.8">
                {props.children}
            </MiniPlane>
        </Move>
    </div> 
    
}


export default TreeDButton; 
