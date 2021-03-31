import React, { CSSProperties } from 'react';

type ColumnProps = {
    alignItems?: string
};

const Column:React.FC<ColumnProps> = (props) => {

    const style:CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: props.alignItems ? props.alignItems  : "center",
        width: "100%"
    }

    return <div style ={style}>{props.children}</div>
}
export default Column;