// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore((state) => ({
    deleteRecipe: state.deleteRecipe,
  }));

  const navigate = useNavigate(); // Initialize the navigate function

  const handleDelete = () => {
    // Delete the recipe from the store
    deleteRecipe(recipeId);

    // Redirect the user to the home page or recipe list page after deletion
    navigate('/recipes'); // Adjust the route as needed (e.g., `/recipes` or `/`)
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;

