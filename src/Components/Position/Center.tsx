import React from 'react';

type CenterProps = {
    horizontal?: boolean,
    vertical?: boolean, 
    heightAvailable?: string | number, 
};



/**
 * This component is responsible for aligning the elements
 *  that are inside (in the available space it has),
 *  its default values can be changed 
 */
const Center:React.FC<CenterProps> = (props) => {

    let height:string|number = props.heightAvailable ? props.heightAvailable : "100%";
    let vertical:boolean = props.vertical == undefined? true : props.vertical;
    let horizontal:boolean = props.horizontal == undefined? true :  props.horizontal;

    return <div style = {{
    display: 'flex',
    flex: 1,
    width: "100%",
    alignItems: vertical?  'center' : "start",
    justifyContent: horizontal ?  'center' : "start",
    height: height
    }}>{props.children}</div>
}
export default Center;