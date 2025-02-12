import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sims = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRecipes = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
        params: {
          apiKey: '',
          query: query,
          addRecipeInformation: true,
          number: 2,
        },
      });
      setRecipes(res.data.results);
    } catch (error) {
      console.error('Error fetching recipes', error);
      setError('Failed to fetch recipes. Please try again.');
    }
    setLoading(false);
  };

  // Fetching popular recipes on the initial load
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Recipe Search</h1>
      
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 rounded-md shadow-md border-2 border-gray-300 focus:outline-none"
        />
        <button
          onClick={fetchRecipes}
          className="w-full mt-4 bg-blue-500 text-white p-3 rounded-md shadow-md hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
              <a 
                href={recipe.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sims;
