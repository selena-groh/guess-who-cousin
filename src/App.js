import "./App.scss";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Cousin Guess Who?</h1>
      <p className="App-subtitle">
        A Guess Who remake, but with the Coloian family!
      </p>
      <Game />
    </div>
  );
}

export default App;
