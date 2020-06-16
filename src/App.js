import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-lists/card-list.component";
import SearchBox from "./components/searchBox/searchbox.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => {
        setMonsters(user);
      });
  });

  function getSearch(e) {
    setSearch(e.target.value);
  }

  const filteredMnsters = monsters.filter((items) =>
    items.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
    <h1 className='heading'>MONSTERS-ROLODEX</h1>
      <SearchBox handleChanges={getSearch} />
      <CardList monsters={filteredMnsters} />
    </div>
  );
}

export default App;
