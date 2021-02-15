import React, { useContext } from 'react';

import Row from '../Components/Position/Row';
import Spacer from '../Components/Position/Spacer';

import Menu from '../Components/Menu';
import CustomCanvasDraw from './CustomCanvasDraw';

type ContentProps = {
    
};

const Content:React.FC<ContentProps> = () => {
    
    return <Row>
            <Spacer/>
            <Menu/>
            <Spacer/>
            <CustomCanvasDraw/>
            <Spacer/>
        </Row>
}
export default Content;