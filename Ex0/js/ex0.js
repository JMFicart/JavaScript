let phtva = prompt("Prix htva = ");
let qtLivre = prompt("Quantité livres = ");


// if (isNaN(phtva) || isNaN(qtLivre)) {
//     alert("Uniquement données numériques");
// } else {
//     let total = parseInt(qtLivre) * parseFloat(phtva) * 1.21;
//     alert("Résultat = " + total);
// }
qtLivre = parseInt(qtLivre);
phtva = parseFloat(phtva);
let total;
if (!isNaN(phtva) && !isNaN(qtLivre)) 
    total = qtLivre * phtva * 1.21;

console.log(total === undefined ? "Uniquement données numériques" : total);
