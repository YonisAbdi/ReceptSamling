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

// Function to fetch recipes from IndexedDB
export async function getRecepies() {
    const db = await createDatabase();
    const tx = db.transaction('recepies', 'readonly');
    const store = tx.objectStore('recepies');
    const allRecepies = await store.getAll();
    return allRecepies;
}

export default createDatabase;
