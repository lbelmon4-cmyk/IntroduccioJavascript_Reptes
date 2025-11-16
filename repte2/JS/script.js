// Repte 2 - script.js
// Càlculs amb TIPUS_IVA i variables; mostrar tot per consola.

const TIPUS_IVA = 21; // percentatge

// Variables inicials (poden canviar-se per provar casos diferents)
let nomProducte = 'Tauleta';
let preuProducte = 85; // preu per unitat sense IVA
let unitats = 2;

console.log('--- Repte 2: Inici del procés ---');
console.log('Nom producte:', nomProducte);
console.log('Preu unitat (sense IVA):', preuProducte);
console.log('Unitats:', unitats);

// Base imposable: preu * unitats
// IMPORTANT: la variable que mostra base imposable i preu total ha de ser la mateixa.
// Per complir això reutilitzarem la variable `importe`:
let importe = preuProducte * unitats; // base imposable
console.log('Base imposable (importe):', importe.toFixed(2) + ' €');

// Calculem IVA i preu total reassignant `importe` per contenir el total amb IVA
const ivaValor = (importe * TIPUS_IVA) / 100;
console.log('IVA (' + TIPUS_IVA + '%):', ivaValor.toFixed(2) + ' €');

// Reutilitzem la mateixa variable `importe` per passar a ser el preu total (base + IVA)
importe = importe + ivaValor; // ara `importe` és preu total
console.log('Preu total (importe, amb IVA):', importe.toFixed(2) + ' €');

// Variable booleana segons si el preu (preu total) supera 100€
let esCar = importe > 100; // true si superior a 100€
console.log('És car (preu total > 100€)?', esCar);

if (esCar) {
  console.log('Missatge: Aquest producte/preu és car (supera 100€).');
} else {
  console.log('Missatge: El preu és igual o inferior a 100€.');
}

console.log('--- Repte 2: Finalitzat ---');
