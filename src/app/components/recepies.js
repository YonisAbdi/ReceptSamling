'use client'
// components/Recipes.js
import { useEffect, useState } from 'react';


function Recipes(){
    const [recepies, setRecepies] = useState([]);

    useEffect(() => {
        fetch('./recepies.json')
            .then((response) => response.json())
            .then((data) => setRecepies(data));
    }, []);

    return(
        <div>
            <h1>Recepies</h1>
            {recepies.map((recepie) => (
            <div key={recepie.id}>
                <h2>{recepie.name}</h2>
                <h3>Ingridents:</h3>
                <ul>
                    {recepie.ingredients.map((ingredient, index) =>(
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3>Instructions:</h3>
                <p>{recepie.instructions}</p>
            </div>
            ))}
        </div>
    );
}

export default Recipes;