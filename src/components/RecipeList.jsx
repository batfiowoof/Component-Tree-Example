import React from "react";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ recipes }) => (
  <div>
    {recipes.map((recipe) => (
      <RecipeItem key={recipe.id} recipe={recipe} />
    ))}
  </div>
);

export default RecipeList;
