import React from 'react';

type DisplayNameProps = {
    name: string | undefined,
    photo: string |undefined  
};

const DisplayName:React.FC<DisplayNameProps> = (props) => {
    
    return <>
        <img style = {{height : 40, width : 40, borderRadius: 50, marginLeft: 20 , marginRight: 10}} src = {props.photo} />
        {props.name}
    </>
}
export default DisplayName;