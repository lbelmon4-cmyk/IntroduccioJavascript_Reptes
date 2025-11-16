const TIPUS_IVA = 21;

function formatEuro(v) {
  return v.toFixed(2) + ' €';
}

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

// Si hi ha un array comandes global (per exemple creat a repte3), l'utilitzem.
// En cas contrari, creem un array de mostra.
const sourceComandes = (typeof comandes !== 'undefined' && Array.isArray(comandes))
  ? comandes
  : [
      crearComanda('Tauleta', 85, 2),
      crearComanda('Casc', 45, 1),
      crearComanda('Mochila', 60, 2)
    ];

// Omplir la taula
const tbody = document.querySelector('#orders-table tbody');
const existingTbody = tbody;
if (!existingTbody) {
  console.error('No s\'ha trobat #orders-table tbody');
} else {
  // buidem per seguretat
  existingTbody.innerHTML = '';

  let sumBase = 0;
  let sumTotal = 0;

  sourceComandes.forEach(c => {
    const tr = document.createElement('tr');

    const tdNom = document.createElement('td'); 
    tdNom.textContent = c.nomProducte; 
    tr.appendChild(tdNom);

    const tdPreu = document.createElement('td'); 
    tdPreu.textContent = c.preuUnitat.toFixed(2); 
    tr.appendChild(tdPreu);

    const tdUnitats = document.createElement('td'); 
    tdUnitats.textContent = c.unitats; 
    tr.appendChild(tdUnitats);

    const tdBase = document.createElement('td'); 
    tdBase.textContent = c.baseImposable.toFixed(2); 
    tr.appendChild(tdBase);

    const tdTotal = document.createElement('td'); 
    tdTotal.textContent = c.preuTotal.toFixed(2); 
    tr.appendChild(tdTotal);

    existingTbody.appendChild(tr);

    sumBase += Number(c.baseImposable) || 0;
    sumTotal += Number(c.preuTotal) || 0;
  });

  // Afegim un peu de taula amb totals
  const tfoot = document.querySelector('#orders-table tfoot') || document.createElement('tfoot');
  tfoot.innerHTML = '';
  const trFoot = document.createElement('tr');

  const tdLabel = document.createElement('td'); 
  tdLabel.setAttribute('colspan', '3'); 
  tdLabel.style.textAlign = 'right'; 
  tdLabel.textContent = 'Totals:'; 
  trFoot.appendChild(tdLabel);

  const tdSumBase = document.createElement('td'); 
  tdSumBase.textContent = sumBase.toFixed(2); 
  trFoot.appendChild(tdSumBase);

  const tdSumTotal = document.createElement('td'); 
  tdSumTotal.textContent = sumTotal.toFixed(2); 
  trFoot.appendChild(tdSumTotal);
  tfoot.appendChild(trFoot);

  // si no existeix tfoot al DOM, l'afegim
  if (!document.querySelector('#orders-table tfoot')) {
    document.querySelector('#orders-table').appendChild(tfoot);
  }
}
