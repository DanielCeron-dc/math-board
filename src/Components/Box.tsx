import React, { CSSProperties } from 'react';

type BoxProps = {
    color?:string,
};

const Box:React.FC<BoxProps> = (props) => {
    
    return <div style = {{height: 100, width: 100, backgroundColor: props.color ?props.color : "white", position: "static"}}></div>
}
export default Box;