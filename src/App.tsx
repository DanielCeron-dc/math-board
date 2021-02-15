import React, {useContext} from 'react';
import Center from './Components/Position/Center';
import Navbar from './Components/UI/Navbar';
import Content from './Containers/Content';

import PageDimensionContext from "./Context/PageDimensions/PagedimensionsContext";



function App() {
  
  const {windowHeight, windowWidth} = useContext(PageDimensionContext); 

  return (
    <div className="App" style = {{height: windowHeight, backgroundColor: "black"}}>
      <Navbar/>
      <Center heightAvailable={(windowHeight-50)}>
        <Content/>
      </Center>
    </div>
  );
}

export default App;
