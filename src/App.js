import "./App.scss";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Guess Who, Caloian?</h1>
      <p className="App-subtitle">
        A Guess Who remake, but with Caloian characters!
      </p>
      <Game />
    </div>
  );
}

export default App;
