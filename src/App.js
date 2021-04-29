import { useState } from "react";
import styled from "styled-components";

import { Nav } from "./components/Nav";
import { Results } from "./components/Results";
import { filterData } from "./utils/filter";

import data from "./data.json";

const SearchWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`;

function App() {
  const [searchValue, setSearchValue] = useState();

  const setSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const searchScenarios = () => {
    console.log(data);
    // get filtered data
    filterData(data);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <SearchWrapper>
        {" "}
        <input type="text" onChange={setSearch} value={searchValue} />
        <p>Your search term: {searchValue}</p>
        <button onClick={searchScenarios}>Search</button>
      </SearchWrapper>

      <div className="App-container">
        <Nav />
        <Results data={data} />
      </div>
    </div>
  );
}

export default App;
