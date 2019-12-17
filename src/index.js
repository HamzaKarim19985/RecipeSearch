import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Recipe from "./Recipe";

import "./styles.css";
import "./index.css";

function App() {
  const apiID = "783e4cc0";
  const apiKey = "92d470cea092f8eb70d961e2f5927fbd";
  const [recipeArr, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Chicken");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const resp = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${apiID}&app_key=${apiKey}`
    );
    const data = await resp.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };
  const handleChange = event => {
    setSearch(event.target.value);
  };
  const getQuery = event => {
    event.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form onSubmit={getQuery} class="searchForm">
        <input
          className="searchBar"
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Recipe"
        />

        <button className="searchButton" type="submit">
          Search
        </button>
      </form>

      <div>
        {recipeArr.map(e => (
          <Recipe
            key={e.recipe.label}
            image={e.recipe.image}
            name={e.recipe.label}
            calories={e.recipe.calories}
            ingredients={e.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
