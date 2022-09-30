import fetch  from 'node-fetch';

import questionnaire from './src/inquirerDemo.js';
import { addition as add, soustraction as sous, pi } from './src/inquirerDemo.js';
import { readJsonData, writeJsonData } from './src/manageData.js';
/*console.log('Ceci est un test');
const a = 2;
const b = 3;

if (a + b === 5) {
    console.log('Ça fonctionne!');
} else {
    console.log('Ça ne fonctionne pas! Erreur!');
}*/

/*const stationsBixiUrl = "https://www3.longueuil.quebec/sites/longueuil/files/donnees_ouvertes/stationsbixi.json";
const bixiResponse = await fetch(stationsBixiUrl);
const bixiJson = await bixiResponse.json();
console.log(JSON.stringify(bixiJson));*/

const existingData = readJsonData();

console.log('existingData', existingData);

console.log('addition', add(2,3));
console.log('soustraction', sous(2,3));
console.log('pi', pi);

const reponses = await questionnaire();
existingData.age = reponses.age;
existingData.prenom = reponses.prenom;
console.log(reponses);
writeJsonData(undefined, existingData);


