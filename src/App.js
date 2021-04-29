import { Nav } from "./components/Nav";
import { Results } from "./components/Results";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <Nav />
        <Results />
        <p>Hello world!</p>
      </div>
    </div>
  );
}

export default App;
