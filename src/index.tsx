import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import PageDimensionsProvider from "./Context/PageDimensions";
import CanvasDrawProvider from "./Context/CanvasDraw"; 
import { CanvasDrawContext } from './Context/CanvasDraw/CanvasDrawContext';


ReactDOM.render(
  <React.StrictMode>
    <CanvasDrawProvider>
      <PageDimensionsProvider>
        <App />
      </PageDimensionsProvider>
    </CanvasDrawProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
