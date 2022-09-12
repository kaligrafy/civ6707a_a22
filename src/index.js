const fetch = require('node-fetch');

/*console.log('Ceci est un test');
const a = 2;
const b = 3;

if (a + b === 5) {
    console.log('Ça fonctionne!');
} else {
    console.log('Ça ne fonctionne pas! Erreur!');
}*/

const stationsBixiUrl = "https://www3.longueuil.quebec/sites/longueuil/files/donnees_ouvertes/stationsbixi.json";
fetch(stationsBixiUrl).then(function(response) {
    response.json().then(function(jsonResponse) {
        console.log(JSON.stringify(jsonResponse));
        process.exit();
    });
});