'use client'
import React, { useEffect, useState } from 'react';
import Recipes from "./components/recepies";
import styles from "./page.module.css";
import { getRecepies } from "./indexDB/db";
import Search from "./components/search";

export default function Home() {
  const [recepies, setRecepies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function initAndFetchRecepies() {
      // Check if recipes are stored in localStorage
      const storedRecepies = localStorage.getItem('recepies');
      if (storedRecepies) {
        setRecepies(JSON.parse(storedRecepies));
      } else {
        // Fetch from IndexedDB if not found in localStorage
        const fetchedRecepies = await getRecepies();
        localStorage.setItem('recepies', JSON.stringify(fetchedRecepies)); // Store the fetched data in localStorage
        setRecepies(fetchedRecepies);
      }
    }

    initAndFetchRecepies();
  }, []);

  // Example handler to update search query from Search component
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter recipes based on search query
  const filteredRecepies = recepies.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className={styles.main}>
      <Search onSearch={handleSearch} />
      <Recipes recepies={filteredRecepies} />
    </main>
  );
}
