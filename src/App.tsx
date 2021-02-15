import React, {useContext} from 'react';


import Center from './Components/Position/Center';
import Content from './Containers/Content';
import Auth from './Containers/Auth/Auth';

import PageDimensionContext from "./Context/PageDimensions/PagedimensionsContext";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AuthContext } from './Context/Auth/AuthContext';



function App() {
  
  const {user} = useContext(AuthContext); 

  return (
    <Router>
      <div className="App" style = {{background: "linear-gradient(356deg, rgba(45,33,65,1) 35%, rgba(127,50,190,1) 100%)"}}>
        <Switch>
            <Route path="/auth">
              <h1 style = {{ margin: 0, padding: 50, position: "fixed"}}>Math Board</h1>
                {user == null ? <Auth/> : <Redirect to="/"/>}
            </Route>
            <Route path="/">
                {user != null ? <Content/> : <Redirect to="/auth" />}
            </Route>
        </Switch>
     
      </div>
    </Router>
    
  );
}

export default App;
