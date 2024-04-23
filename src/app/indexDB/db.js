'use client'
import { openDB } from "idb";

async function createDatabase(){
    const db = await openDB('ReceptDatabase', 2, {
        upgrade(db){
            if(!db.objectStoreNames.contains('recepies')) {
                db.createObjectStore('recepies', {keyPath: 'id', autoIncrement: true});
            }
        },
    });
    
    return db;
}

export default createDatabase;