import React, { CSSProperties } from 'react';

type SpacerProps = {
    height?: string | number,
    width?: string | number,
};


/**
 * is a div which if you don't define that width,
 * it will suppose the remaining size of a flexbox 
 */
const Spacer:React.FC<SpacerProps> = (props) => {

    const style: CSSProperties = !props.width ?  {
        flexGrow:1,
        height: props.height ?  props.height :  0,
    }: 
    {
        width: props.width,
        height: props.height ?  props.height :  0,
    }
    
    return <div style ={style}></div>
}
export default Spacer;