import React from 'react';
import Center from './Components/Position/Center';
import Navbar from './Components/UI/Navbar';
import Content from './Containers/Content';
import usePageDimension from './hooks/usePageDimensions';

function App() {
  const [windowHeight] = usePageDimension();

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
