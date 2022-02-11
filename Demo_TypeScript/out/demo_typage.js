"use strict";
// Déclaration de variables
let nom = "string"; // string par inférence
let age = 15;
let grand = false;
let age_animaux = [2, 5, 1];
let value;
let nimp;
//nom = age;
value = nom;
value = age;
nimp = { key1: 'value1', key2: 'value2', };
nimp = nom;
nimp = age;
// nombres
let binaire = 0b00001011;
let octal = 0o13;
let decimal = 11;
let hexadecimal = 0xB;
let grandnombre = 250000000000000;
// let tropgrandnombre: bigint = 0xFFFFFFFFFFFFFF;
// Tableaux
let ageanimaux = [2, 5, 1];
let nomanimaux = ['riri', 'fifi', 'loulou'];
// type unknown
let saipa = "saipa";
saipa = 5;
// type never : pour des retours de fonctions qui ne se terminent jamais bien
function maFunc(error_message) {
    throw error_message;
}
let tab = ['paul', 48, true];
tab = [false, 27, 'maria'];
// tab = [{nom: 'Dominique'}]; Impossible (string, number, boolean) par inférence
// enums
var Couleur;
(function (Couleur) {
    Couleur[Couleur["RED"] = 0] = "RED";
    Couleur[Couleur["GREEN"] = 4] = "GREEN";
    Couleur[Couleur["BLUE"] = 5] = "BLUE";
})(Couleur || (Couleur = {}));
let macouleur = Couleur.BLUE;
function addition(m1, m2, m3) {
    // Si je veux pouvoir ne pas donner le paramètre m3
    return m3 ? m1 + m2 + m3 : m1 + m2;
}
// Union de types
let naissance; // chaîne ou date
let personne = { nom: "Luc", age: 40 }; // si je met une propriété de trop ou pas assez, c'est un autre type.
let tabassoc = { Pauline: new Date(),
    "Maria": new Date(),
    'Dominique': new Date()
};
// Je veux définir un tableau associatif où les clés sont les noms de personne et les valeurs un objet contenant le nom de la personne ainsi que sa date de naissance
// en Date ou en chaîne de caractères.
let t1 = { lucie: { nom: 'Lucie', date: new Date() },
    maria: { nom: 'Maria', date: new Date() }
};
let t2;
let truc = [{ id: 1, alias: { nom: new Date() } }];
let maVar = 'Salut'; // ou let maVar: MonType = 'Au revoir';
let func1 = (p1, p2) => {
    throw p1 + p2;
};
let varInter = 'salut'; // Je peux prendre ce qu'il y a de commun aux 2 types, dans ce cas-ci string.
let object;
// Les tuples
// ensemble d'information où l'on sait le nombre et le type d'information qu'il y aura dans chaque case.
let tuple1 = ['Salut', 15, 'n'];
let maVoiture = {
    puissance: 88,
    nbreportes: 3,
    immatriculation: 'KYE188'
};
