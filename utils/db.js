// utils/db.js
import { initDB } from 'react-indexed-db';

const DBConfig = {
  name: 'RecipeDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'recipes',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'ingredients', keypath: 'ingredients', options: { unique: false } },
        { name: 'instructions', keypath: 'instructions', options: { unique: false } }
      ]
    }
  ]
};

initDB(DBConfig);
