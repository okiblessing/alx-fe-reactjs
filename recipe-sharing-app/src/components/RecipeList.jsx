// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Use Link to navigate to the recipe details page */}
            <Link to={`/recipes/${recipe.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No recipes found matching your search</p>
      )}
    </div>
  );
};

export default RecipeList;
