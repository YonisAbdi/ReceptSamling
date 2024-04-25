
'use client'
// components/Recipes.js

import createDatabase from '../indexDB/db';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


function Recipes() {
    const [recepies, setRecepies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredRecepies, setFilteredRecepies] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem('recepies');
        if (localData) {
            setRecepies(JSON.parse(localData));
        } else {
            fetch('./recepies.json')
                .then(response => response.json())
                .then(data => {
                    setRecepies(data);
                    localStorage.setItem('recepies', JSON.stringify(data));
                })
                .catch(error => console.error('Error fetching recipes:', error));
        }
    }, []);

    useEffect(() => {
        const filtered = recepies.filter(recipe =>
            recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredRecepies(filtered);
    }, [searchQuery, recepies]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };
    
    //Function to store favorite in localStorage
    const toggleFavorite = (index) => {
        const updatedRecipes = [...recepies];
        updatedRecipes[index].isFavorite = !updatedRecipes[index].isFavorite;
        setRecepies(updatedRecipes);
        localStorage.setItem('recepies', JSON.stringify(updatedRecipes));
    };

    return (
        <div>
            <h1>Recipes</h1>
            <input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={handleSearch}
            />
            {filteredRecepies.length === 0 ? (
                <p>No recipes found.</p>
            ) : (
                filteredRecepies.map((recipe, index) => (
                    <div key={recipe.id}>
                        <h2>{recipe.name} 
                        {/* The click event to change favorite*/}
                            <a onClick={() => toggleFavorite(index)}>
                                <Image 
                                    id={`favorite-${index}`} 
                                    src={recipe.isFavorite ? "./star-fill.svg" : "./star.svg"} 
                                    width={32} 
                                    height={32} 
                                    alt='starIcon'>
                                </Image>
                            </a>                                    
                        </h2>
                        <h3>Ingredients:</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <h3>Instructions:</h3>
                        <p>{recipe.instructions}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Recipes;
