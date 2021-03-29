import React, { useContext } from 'react';

import Row from '../Components/Position/Row';
import Spacer from '../Components/Position/Spacer';


import Menu from '../Components/Menu';
import CustomCanvasDraw from './CustomCanvasDraw';
import PageDimensionContext from '../Context/PageDimensions/PagedimensionsContext';
import Center from '../Components/Position/Center';
import TopBar from '../Components/TopBar';


const Content:React.FC = () => {
    
    const {windowHeight} = useContext(PageDimensionContext); 

    return <>
        <Center heightAvailable={(windowHeight)}>
            <Menu/>
            <CustomCanvasDraw/>
        </Center>
    </> 
    
    
}
export default Content;