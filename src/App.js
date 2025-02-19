import "./App.scss";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Guess Who? Cousin Edition</h1>
      {/* <p className="App-subtitle">A Guess Who remake, but with family!</p> */}
      <Game />
      <div className="App-instructions">
        <h2>Instructions:</h2>
        <ol>
          <li>Form 2 teams, and have each team open this website.</li>
          <li>
            Each team then needs to choose a "secret person", either by clicking
            "Choose a Person" and then clicking the person you want, or by
            clicking "Choose a Random Person".
          </li>
          <li>
            Team 1 asks a question to Team 2 about their secret person, such as
            "Does this person live in California?" or "Does this person like
            playing games?"
          </li>
          <li>
            Team 2 answers yes or no, and based on that Team 1 then clicks on
            people's cards to eliminate them as possibilities.
          </li>
          <li>
            Repeat until a team correctly guesses who the other team's secret
            person is.
          </li>
          <li>
            Click "Clear Board" to clear the eliminated options and choose a new
            secret person.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
