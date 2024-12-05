import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function RecipeDetail() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  // Fetch the recipe data based on ID
  useEffect(() => {
    const fetchRecipe = async () => {
      // Assuming the data is coming from a static file called `data.json`
      const response = await fetch('/data.json');
      const data = await response.json();

      const selectedRecipe = data.find((item) => item.id === parseInt(id));
      setRecipe(selectedRecipe);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex flex-col items-center mb-6">
        <img src={recipe.image} alt={recipe.title} className="rounded-lg shadow-lg w-full h-64 object-cover mb-4" />
        <h1 className="text-3xl font-bold text-center mb-2">{recipe.title}</h1>
        <p className="text-lg text-gray-600">{recipe.description}</p>
      </div>

      <div className="my-8 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
