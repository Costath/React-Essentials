import React from "react";
import './App.css';

function SecretComponent() {
  return <h1>Secret info</h1> 
}

function RegularComponent() {
  return <h1>Regular info</h1> 
}

//instead of using 'props.authorized' we can use { authorized } and the props obj will de destructed into the variables declared here
function App({ authorized }) {
  return (
    <>
      {authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  );
}

export default App;
