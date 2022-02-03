import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setsearch] = useState();
  const [query, setquery] = useState("paneer");
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=75331adc&app_key=eb262f9ae8b00a503b2c9affdea33913&health=vegetarian`
      )
      .then((res) => {
        const response = res.data.hits;
        console.log(response);
        setRecipes(response);
        document.title = "Wish-Dish";
      })
      .catch((error) => {
        console.log("getting error data:" + error);
      });
  }, [query]);

  const updateInput = (e) => {
    console.log(e.target.value);
    setsearch(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setquery(search);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Wish-Dish
          </a>

          <form className="d-flex" onClick={updateQuery}>
            <input
              className="form-control me-2"
              onChange={updateInput}
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="container my-3">
        <div className="row">
          {recipes.map((recipe, index) => (
            <div className="col-md-4 my-3" key={index}>
              <RecipeCard
                title={recipe.recipe.label}
                imageUrl={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                source={recipe.recipe.url}
              />
            </div>
          ))}
          {recipes.length===0 && <span className="fs-1">0 search result</span>}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
