'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Recipes from "./components/recepies";
import createDatabase from "./indexDB/db";
import { useEffect } from "react";
import Search from "./components/search";


export default function Home() {
  useEffect(() =>{
    async function doDBOperations(){
      const db = await createDatabase();

      await db.add('books',{title: 'Harry Potter', author: 'JK Rowling'});

      const books = await db.getAll('books');
      console.log(books);
    }

    doDBOperations();
    
  }, []);

  
  return (
    <main className={styles.main}>
      <Search />

      <Recipes />
      
    </main>
  );
}
