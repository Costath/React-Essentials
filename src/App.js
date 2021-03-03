import './App.css';

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
console.log(dishObjects);

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
