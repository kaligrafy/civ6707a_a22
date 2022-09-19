import fetch  from 'node-fetch';

/*console.log('Ceci est un test');
const a = 2;
const b = 3;

if (a + b === 5) {
    console.log('Ça fonctionne!');
} else {
    console.log('Ça ne fonctionne pas! Erreur!');
}*/

const stationsBixiUrl = "https://www3.longueuil.quebec/sites/longueuil/files/donnees_ouvertes/stationsbixi.json";
const bixiResponse = await fetch(stationsBixiUrl);
const bixiJson = await bixiResponse.json();
console.log(JSON.stringify(bixiJson));
