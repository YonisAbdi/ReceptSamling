'use client'
import React, { useEffect, useState } from 'react';
import Recipes from "./components/recepies";
import styles from "./page.module.css";
import { getRecepies } from "./indexDB/db";

export default function Home() {
  const [recepies, setRecepies] = useState([]);

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

  return (
    <main className={styles.main}>
      <Recipes recepies={recepies} />
    </main>
  );
}
