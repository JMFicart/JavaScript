//alert("Hello world !");
//console.log("Bonjour");
//console.warn("Attention");
//console.error("Erreur");

// if (true){
//     var variable1 = "var";
//     let variable2 = "let";
//     const CONSTANTE = "const"; 

//     variable2 = 15;
//     variable2 = {
//         a : 1486
//     };
//     // CONSTANTE = variable2; // on ne peut modifier une constante
// }

// console.log(variable1);
// console.log(variable2); // hors de portée
// console.log(CONSTANTE); // hors de portée

// console.log(variable3);

// var test1 = 14;
// let test2 = 15;
// const test3 = 16;

// constantes prédéfinies

// NaN : Not a Number

// const m1 = prompt("Nombre 1 = ");
// const m2 = prompt("Nombre 2 = ");
// const rslt = parseInt(m1) + parseInt(m2);

// if(isNaN(rslt)){
//     console.log("Calcul impossible");
// } else {
//     console.log("Résultat = " + rslt);
// }

// Infinity
// console.log(Infinity / Infinity); // NaN
// console.log(1200 / 0); // Infinity
// console.log(1200 / Infinity); // 0
// console.log(Infinity * 0); // Nan
// console.log(Infinity * 50); // Infinity
// console.log(Infinity - 2222222222); // Infinity
// console.log(Infinity + 541202222); // Infinity

// undefined
// console.log(p); // Les variables n'ayant pas de valeur donnée ont pour valeur undefined.

// console.log(typeof p);
// p = "Salut";
// console.log(typeof p);

// // Les types
// let entier = 1;
// let reel = 1.2;
// let chaine = "Ma chaine";
// chaine = 'Ma chaine qui s\'appelle "chaine"';
// let tableau = [1, chaine, true];
// let tableauAssoc = {
//     key1: value1,
//     key2: value2
// }
// var resultat = 3 + 3 + "3" // resultat = '63'

// // Truthy / Falsy
// // Certaines valeurs sont considérées comme Falsy
// // même si non false
// console.log(null ? "null est truthy" : "null est falsy");

// // Les tableaux
// let tab = ["e1", 2, false, [], 1.1, new Date(), () => {}, undefined];
// // tab = new Array(); // = [];

// for(let i=0; i < tab.length; i++){
//     console.log(tab[i]);
// }

// // Ajouter
// tab.push("Ajouté à la fin"); // ajout à la fin
// tab.unshift("Ajouté au début");
// tab.splice(tab.length - 2, 0, 15);

// // Supression
// let dernier = tab.pop();
// let premier = tab.shift();
// let subtab = tab.splice(2, 3);

// // Autres
// tab = [1, "2", "trois"]
// tab.sort(); // 1, "2", "trois"
// tab = tab.reverse(); // "trois", "2", 1
// // 1, "2", "trois"
// tab = tab.concat(tab.reverse()) // "trois", "2", 1, 1, "2", "trois"
// console.log(tab.join(" - "));
// subtab = tab.slice(1, 2);
// console.log(subtab.join(" - "));
// subtab = tab.slice(1, -3);
// console.log(subtab.join(" - "));

// // Chaînes de caractères
// let chaine = "ma chaine"; // ou 'ma chaine'
// chaine = 'ma chaine';
// chaine = new String('ma chaine');

// let char = chaine.charAt(3); // 'c'
// // 'a' = 97
// // char.charCodeAt(0) 99
// console.log(char);
// console.log(chaine.charCodeAt(1));
// char = char.concat(char.charCodeAt(0)); // c99
// console.log(char);

// exemple
// let tabChaine = ['a','b','c'];
// for (let i = 0; i < tabChaine.length; i++){
//     let lettre = tabChaine[i];
//     lettre = lettre.charCodeAt(0) + 1;
//     lettre = String.fromCharCode(lettre);
//     tabChaine[i] = lettre;
// }
// console.log(tabChaine);

// chaine = 'ma chaine';
// let index = chaine.indexOf("a"); // 1
// index = chaine.lastIndexOf(String.fromCharCode(101)); // e à la 8ème position
// index = chaine.lastIndexOf('a'); // 5

// chaine = chaine.replace('haine', 'amour');
// console.log(chaine);
// // ma camour
// let subChaine = chaine.slice(1, 4); // 'a c'

// tabChaine = chaine.split('');
// for (let i = 0; i < tabChaine.length; i++){
//     let lettre = tabChaine[i];
//     // lettre = lettre.charCodeAt(0) + 1;
//     // lettre = String.fromCharCode(lettre);
//     tabChaine[i] = lettre;
// }
// console.log(tabChaine);

// // Les dates
// let date = new Date();
// date = new Date(1000);
// date = new Date(2022,2,6,12,30,25,100);
// date = new Date(2022,2,6);
// console.log(date);

// for each
// tab = ["a", "b", "c", "d"];
// // positions
// for(let lettre in tab){
//     console.log(lettre);
// }
// // lettres
// for(let lettre of tab){
//     console.log(lettre);
// }

// let tab = {
//     a: 'A',
//     b: 'B',
//     c: 'C'
// }
// for(let key in tab){
//     console.log(key + ' ' + tab[key]);
// }

// let i = 0;
// while(++i){
//     if (i =='5')
//         break;
// }

// console.log(i); // 0
// // break quitte la boucle.
// // continue quitte l'itération actuelle.

// Les fonctions
function maFonction(a, b){
    var _rslt = 1 + 1;

    if (a)
        return "Salut";
    else if(b)
        return 15;
}

maFonction(1, 2);
console.log(_rslt); // error

function reverseString(chaine){
    return chaine.split('').reverse().join('');
}

// Stockage des fonctions dans des variables
let func = reverseString;
func('salut');

func = function (chaine){
    return chaine.split('').reverse().join('');
}
func('salut');

func = (chaine) => {
    return chaine.split('').reverse().join('');
}
func('salut');

function maFunc(callback){
    // appel du callback à la fin de l'exécution de lamaFunc
    setTimeout(callback, 10000);
}


