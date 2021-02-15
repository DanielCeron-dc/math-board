import React, { CSSProperties, useState } from 'react';

type ButtonProps = {
    onClick: () => void,
};

const Button:React.FC<ButtonProps> = (props) => {


    const [hover, setHover] = useState<boolean>(false);

    const style: CSSProperties = {
        borderStyle: "groove",
        borderColor: "grey",
        height: "30px",
        color: "black",
        fontSize: "15px",
        borderRadius: "30%",
        boxShadow: "0 2px 3px 0 rgba(0,0,0,0.3)",
        transition: "1s",
    }

    const hoverStyle:CSSProperties = {
        ...style,
        backgroundColor: "rgb(161, 166, 173)",
        boxShadow: "0 1px 5px 0 rgba(0,0,0,0.4)",
        cursor: "pointer"
    }
    
    return<button style = {hover ? hoverStyle : style} onMouseOver = {() => setHover(true)} onMouseLeave = {() => setHover(false)}>
        {props.children}
    </button>
}
export default Button;