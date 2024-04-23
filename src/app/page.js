'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Recipes from "./components/recepies.js";
import createDatabase from "./indexDB/db";
import recipesData from "../../public/recepies.json";
import { useEffect } from "react";

export default function Home() {
  useEffect(() =>{
    async function doDBOperations(){
      const db = await createDatabase();

      for (const recipe of recipesData) {
        await db.add('recepies', recipe); // Assuming 'recepies' is the object store name
      }

      const books = await db.getAll('recepies');
      
      console.log(books);
    }

    doDBOperations();
  }, []);

  return (
    <main className={styles.main}>
      <Recipes />
    </main>
  );
}
