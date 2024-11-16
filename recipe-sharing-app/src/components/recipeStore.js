import {create}from 'zustand';

// Create the Zustand store with explicit typing
const useRecipeStore = create<RecipeStore>((set) => ({
  recipes: [],
  
  // Action to add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe]
  })),
  
  // Action to delete a recipe by ID
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  
  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  // Action to set the initial recipes
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;
