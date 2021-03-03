import React from "react";
import './App.css';
import restaurant from "./restaurant.jpg";

function Header(props) {
  return (
    <header>
    <h1>{props.name}'s Kitchen</h1>
  </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      {/* <img src="https://github.com/costath.png" height={200}/> */}
      <img src={restaurant} height={200} alt="table with dishes looking from the top"/>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>It's true in {props.year}.</p>
    </footer>
  );
}

const dishes = [
  "Mac & Cheese",
  "Salmon",
  "Pastel",
  "Pao de queijo"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));

function App() {
  return (
    <div className="App">
      <Header name="Cindy"/>
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
