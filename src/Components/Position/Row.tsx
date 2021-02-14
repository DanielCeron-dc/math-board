import React from 'react';

type RowProps = {
    
};

const Row:React.FC<RowProps> = (props) => {
    return <div style = {{
       display:"flex",
       width: "100%",
       alignItems:"center",
    }}>{props.children}</div>
}
export default Row;