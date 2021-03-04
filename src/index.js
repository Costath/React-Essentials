import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"

//this will create a variable called mostImportantItem with the value of the first item
const [mostImportantItem] = ["boots", "tent", "head lamp"];

ReactDOM.render(
  <App authorized={false}/>,
  document.getElementById('root')
);
