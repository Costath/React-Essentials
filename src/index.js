import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"

// function AppTwo() {
//   return <h1>this is the second app</h1>;
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// ReactDOM.render(
//   <> {/**short-hand sintaxe for React.Fragment*/}
//   {/* <React.Fragment> */}
//     <App />
//     <AppTwo />
//   {/* </React.Fragment>, */}
//   </>,
//   document.getElementById('root')
// );
