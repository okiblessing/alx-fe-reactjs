import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Sample data structure of recipes
const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    summary: "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    summary: "Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato-based gravy.",
    image: "https://via.placeholder.com/150"
  }
  // Add more recipes as needed
];

function HomePage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border rounded-lg shadow-md overflow-hidden"
        >
          {/* Link to navigate to the Recipe Detail page */}
          <Link to={`/recipe/${recipe.id}`}>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
