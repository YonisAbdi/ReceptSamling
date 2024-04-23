'use client'
import { openDB } from "idb";

async function createDatabase(){
    const db = await openDB('ReceptDatabase', 1, {
        upgrade(db){
            if(!db.objectStoreNames.contains('books')) {
                db.createObjectStore('books',{keyPath: 'id', autoIncrement: true});
            }
        },
    });

    return db;
}

export default createDatabase;