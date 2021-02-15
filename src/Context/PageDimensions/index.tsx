import React from 'react';
import usePageDimension from '../../hooks/usePageDimensions';
import PageDimensionContext from "./PagedimensionsContext";


const Index:React.FC = (props) => {
    const [windowHeight, windowWidth] = usePageDimension();
    return <PageDimensionContext.Provider value ={{windowHeight, windowWidth}}>
        {props.children}
    </PageDimensionContext.Provider>
}

export default Index;