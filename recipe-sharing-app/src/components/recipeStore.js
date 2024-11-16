import {create}from 'zustand';

import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // List of all recipes
  searchTerm: '', // Search term input by user
  filteredRecipes: [], // Filtered recipes based on search term
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    )
  })),
}));

export default useRecipeStore;

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
