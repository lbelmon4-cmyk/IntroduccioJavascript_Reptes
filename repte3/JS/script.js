
// Cada Comanda representa un producte i conté:
// nomProducte, preuUnitat, unitats, baseImposable i preuTotal

const TIPUS_IVA = 21; // percentatge d'IVA

// Fàbrica per crear una comanda (per un producte)
function crearComanda(nomProducte, preuUnitat, unitats) {
  const baseImposable = preuUnitat * unitats;
  const iva = (baseImposable * TIPUS_IVA) / 100;
  const preuTotal = baseImposable + iva;
  return {
    nomProducte,
    preuUnitat,
    unitats,
    baseImposable,
    preuTotal
  };
}

// Creem 3 comandes (cada comanda és un producte/objecte)
const comanda1 = crearComanda('Tauleta', 85, 2);
const comanda2 = crearComanda('Casc', 45, 1);
const comanda3 = crearComanda('Mochila', 60, 2);

const comandes = [comanda1, comanda2, comanda3];

console.log('--- Repte 3: Comandes (objectes) ---');
comandes.forEach((c, i) => {
  console.log(`Comanda ${i + 1}: ${c.nomProducte}`);
  console.log(' - Preu unitari:', c.preuUnitat.toFixed(2) + ' €');
  console.log(' - Unitats:', c.unitats);
  console.log(' - Base imposable:', c.baseImposable.toFixed(2) + ' €');
  console.log(' - Preu total (amb IVA):', c.preuTotal.toFixed(2) + ' €');
});

console.log('Array de comandes:', comandes);
