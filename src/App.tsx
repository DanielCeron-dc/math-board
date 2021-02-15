import React, {useContext} from 'react';


import Center from './Components/Position/Center';
import Navbar from './Components/UI/Navbar';
import Content from './Containers/Content';
import Auth from './Containers/Auth/Auth';

import PageDimensionContext from "./Context/PageDimensions/PagedimensionsContext";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



function App() {
  
  const {windowHeight, windowWidth} = useContext(PageDimensionContext); 

  return (
    <Router>
      <div className="App" style = {{height: windowHeight, backgroundColor: "black"}}>
      <Navbar/>
      <Center heightAvailable={(windowHeight-50)}>
        <Switch>
            <Route path="/auth">
              <Auth/>
            </Route>
            <Route path="/">
              <Content/>
            </Route>
        </Switch>
      </Center>
      </div>
    </Router>
    
  );
}

export default App;
