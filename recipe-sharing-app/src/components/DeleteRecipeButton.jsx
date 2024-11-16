// src/components/RecipeDetails.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();  // Extract the recipe ID from URL params
  const navigate = useNavigate();
  
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === Number(recipeId))
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
