import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here`)
  }, [secondary]);
  return (
    <>
      <h1>current emotion is {emotion} and {secondary}</h1>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("enthusiatic")}>Enthuse</button>
    </>
  );
}

export default App;
