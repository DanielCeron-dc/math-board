import React from "react"; 

interface IProps {
    y:number,
    x:number,
    show: boolean,
}


const Move:React.FC<IProps> = (props) =>{

    return <div style = {props.show ? {transform:"translate(" +props.x+"px, " +props.y+"px", transition: "1s",}: {transition: "1s",}}>
        {props.children}
    </div>
}

export default Move; 