import React, { useState } from "react";

function AddRecipeForm() {
  // State to store the form input values
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // State to manage validation errors
  const [errors, setErrors] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  // Validate function for form fields
  const validate = () => {
    let valid = true;
    const newErrors = {};

    // Check if title is empty
    if (!title.trim()) {
      newErrors.title = "Title is required.";
      valid = false;
    }

    // Check if ingredients are empty or have less than two items
    const ingredientList = ingredients.split("\n").map((ingredient) => ingredient.trim());
    if (!ingredients.trim() || ingredientList.length < 2) {
      newErrors.ingredients = "Please provide at least two ingredients.";
      valid = false;
    }

    // Check if steps are empty
    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call validate function to check for errors
    const isValid = validate();
    if (!isValid) return; // If validation fails, don't submit the form

    // If form is valid, submit data (for now, we just log it)
    console.log("Form Submitted:", { title, ingredients, steps });

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Add New Recipe</h2>

      <form onSubmit={handleSubmit}>
        {/* Recipe Title Field */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Field */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Ingredients (one per line)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Enter ingredients, one per line"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps Field */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Enter the preparation steps"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
