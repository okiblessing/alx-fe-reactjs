import create from 'zustand';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const useRecipeStore = create(set => ({
  recipes: [],  // Array to hold all recipes
  favorites: [],  // Array to hold user's favorite recipe IDs
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],  // Array to hold recommended recipes
  generateRecommendations: () => set(state => {
    // Mock recommendation generation logic
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5  // Randomized for demo purposes
    );
    return { recommendations: recommended };
  }),

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
