// Search.js
import React, { useState } from 'react';
import recepiesData from './recepies';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchRecipes = () => {
    const filteredRecipes = [];
    for (let i = 0; i < recepiesData.length; i++) {
      if (recepiesData[i].name.toLowerCase().includes(query.toLowerCase())) {
        filteredRecipes.push(recepiesData[i]);
      }
    }
    console.log('Filtered recipes:', filteredRecipes); // Logga här
    setSearchResults(filteredRecipes);
  };
  

  const handleChange = (e) => {
    setQuery(e.target.value);
    searchRecipes(); // Uppdatera sökresultaten vid varje ändring i sökrutan
  };

  return (
    <div>
    
       
    
      {/* Visa sökresultat */}
      <ul>
        {searchResults.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
          // Du kan ändra här för att visa andra relevanta detaljer om receptet
        ))}
      </ul>
    </div>
  );
};

export default Search;
