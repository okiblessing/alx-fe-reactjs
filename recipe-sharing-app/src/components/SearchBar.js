import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term); // Update the search term in the store
    filterRecipes(); // Filter recipes based on the new search term
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleSearchChange}
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;

