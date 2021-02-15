import {createContext} from "react";

export interface IPageDimensions {
    windowHeight: number,
    windowWidth: number
}

const PageDimensionContext = createContext<IPageDimensions>({windowHeight: 0, windowWidth: 0}); 

export default PageDimensionContext;
