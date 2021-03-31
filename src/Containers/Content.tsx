import React, { useContext } from 'react';

import Menu from '../Components/Menu';
import CustomCanvasDraw from './CustomCanvasDraw';
import PageDimensionContext from '../Context/PageDimensions/PagedimensionsContext';
import Center from '../Components/Position/Center';



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