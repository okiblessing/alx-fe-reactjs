// src/components/DeleteRecipeButton.jsx
import React from 'react';
import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  // Destructure the deleteRecipe action from the Zustand store
  const { deleteRecipe } = useRecipeStore((state) => ({
    deleteRecipe: state.deleteRecipe,
  }));

  // Handler for when the delete button is clicked
  const handleDelete = () => {
    // Call deleteRecipe function with the recipeId passed in as a prop
    deleteRecipe(recipeId);
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
