// src/App.jsx
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar'; // SearchBar component
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';




const App = () => {
  return (
    <Router>
      <div>
        <SearchBar /> {/* Add the SearchBar component */}
        <Routes>
          <Route path="/recipes" element={<RecipeList />} />
          {/* Add other routes as necessary */}
        </Routes>
      </div>
    </Router>
  );
};



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Welcome to the Recipe Sharing App!</div>} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;

