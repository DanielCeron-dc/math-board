import React, { CSSProperties } from 'react';
import Center from '../Position/Center';


type NavbarProps = {
    
};

const style: CSSProperties = {
    width: "100%",
    backgroundColor: "grey",
    height: 50,
}

const Navbar:React.FC<NavbarProps> = () => {
    
    return <div style={style}>
        <Center>
            <h1> NavBar </h1>
        </Center>
    </div>
}
export default Navbar;