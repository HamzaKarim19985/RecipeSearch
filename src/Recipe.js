import React from "react";

const Recipe = ({ image, name, calories, ingredients }) => {
  return (
    <div>
      <h1>{name}</h1>
      <ol>
        {ingredients.map(e => (
          <li>{e.text}</li>
        ))}
      </ol>
      <img src={image} alt="" />
      <p>Calories:{calories}</p>
    </div>
  );
};

export default Recipe;
