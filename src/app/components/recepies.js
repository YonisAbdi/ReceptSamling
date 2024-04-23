
// components/Recipes.js
import { useEffect, useState } from 'react';
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
                .then((response) => response.json())
                .then((data) => {
                    setRecepies(data);
                    localStorage.setItem('recepies', JSON.stringify(data));
                })
                .catch(error => console.error('Error fetching recipes:', error));
        }
    }, []);

    return (
        <div>
            <h1>Recepies</h1>
            {recepies.map((recepie) => (
                <div key={recepie.id}>
                    <h2>{recepie.name}</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        {recepie.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Instructions:</h3>
                    <p>{recepie.instructions}</p>
                </div>
            ))}

        fetch('./recepies.json')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setRecepies(data);
            });
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
                filteredRecepies.map((recipe) => (
                    <div key={recipe.id}>
                        <h2>{recipe.name}</h2>
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
