# ReceptSamling
Skapa en applikation där användare kan spara sina favoritrecept, inklusive ingredienser och tillagningsinstruktioner. Användare ska kunna söka bland sina sparade recept.

## Köra Applikationen
Använd npm run dev, om det inte går pröva npm install för att installera alla dependecis

## Beskrivning
IndexedDB kommer hålla recepten efter den läser av JSON data, det ökar performence och gör att man kan läsa datan offline. (Johan)
LocalStorage håller användarsettings, när man söker efter recept
IndexedDB + LocalStorage, IndexedDB hanterar hålla recpten och LocalStorage håller användarsökningar

## Requirments
1. Implementer IndexedDB som kommer hålla JSON data
2. Implementer LocalStorage
3. CSS och styling
4. Single Page Application, när man klickar på ett recept kommer man till dess sida med mer information
