import React, { CSSProperties } from 'react';

type ColumnProps = {
    
};

const style:CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
}

const Column:React.FC<ColumnProps> = (props) => {

    return <div style ={style}>{props.children}</div>
}
export default Column;