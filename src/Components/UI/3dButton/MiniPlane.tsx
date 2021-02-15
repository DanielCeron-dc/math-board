import React, { CSSProperties} from "react"

const MiniPlane:React.FC<{rgba: string, profundidad?: boolean}> = (props) => {

    const style: CSSProperties = {
        transform: "skewY(-41deg)",
        width: "50px",
        height: "70px",
        backgroundColor: "rgba("+props.rgba+")", 
        display: "inline-grid",
        position: "fixed",
        color: "white",
        justifyContent: "center",
        border: "none", 
        alignItems: "center",
        boxShadow: props.profundidad ? "-1px 1px 1px rgba(0, 0, 0)" :  "inset 0 0 2px rgba(0, 0, 0, .5)"  ,
	    filter: "blur(0.5px)",
        cursor: "pointer"
    }


    const profundidad1:CSSProperties = {
        backgroundColor: "black",
        content: '',
        position: "absolute",
        top:"-1px",
        left: "-7px",
        width: "10px",
        height: "100%",
        background: "#2a2a2a",
        transformOrigin: "right",
        transform: "skewY(-49deg)",
    }

    const profundidad2:CSSProperties = {
        backgroundColor: "black",
        content: '',
        position: "absolute",
        bottom: "-10px",
        left: "1.5px",
        width: "100%",
        height: "10px",
        background: "#2a2a2a",
        transformOrigin: "top",
        transform: "skewX(-41deg)",
    }


    return<div style = {{width: "50px",
    height: "70px",
    position: "fixed",}}>
        <button style = { style }>
        {props.profundidad && <React.Fragment>
            <div style = {profundidad1}></div>
            <div style = {profundidad2}></div>
        </React.Fragment>}
        
        {props.children}
    </button>
    </div> 
}


export default MiniPlane;