import create from 'zustand';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

// Define the types for the store
interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[]; // Assume ingredients is an array of strings
}

interface RecipeStore {
  recipes: Recipe[];
  searchTerm: string;
  filteredRecipes: Recipe[];
  
  // Actions
  setSearchTerm: (term: string) => void;
  filterRecipes: () => void;
  
  addRecipe: (newRecipe: Recipe) => void;
  deleteRecipe: (id: number) => void;
  updateRecipe: (updatedRecipe: Recipe) => void;
  setRecipes: (recipes: Recipe[]) => void;
}

// Create Zustand store
const useRecipeStore = create<RecipeStore>((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // Set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  // Filter recipes based on the search term
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    )
  })),
  
  // Add a new recipe to the list
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe]
  })),
  
  // Delete a recipe by ID
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  
  // Update an existing recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  // Set the initial list of recipes
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;
