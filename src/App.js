import { Nav } from "./components/Nav";
import { Results } from "./components/Results";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-container">
        <Nav />
        <Results />
      </div>
    </div>
  );
}

export default App;
