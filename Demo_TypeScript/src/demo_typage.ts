// Déclaration de variables
let nom  = "string"; // string par inférence
let age: number = 15;
let grand: boolean = false;
let age_animaux: number[] = [2, 5, 1];

let value;
let nimp: any;

//nom = age;
value = nom;
value = age;

nimp = {key1: 'value1', key2: 'value2',}
nimp = nom;
nimp = age;

// nombres
let binaire = 0b00001011;
let octal = 0o13;
let decimal = 11;
let hexadecimal = 0xB;

let grandnombre = 250_000_000_000_000;
// let tropgrandnombre: bigint = 0xFFFFFFFFFFFFFF;

// Tableaux
let ageanimaux: number[] = [2,5,1];
let nomanimaux: Array<string> = ['riri', 'fifi', 'loulou'];

// type unknown
let saipa: unknown = "saipa";
saipa = 5;

// type never : pour des retours de fonctions qui ne se terminent jamais bien
function maFunc(error_message: String): never {
    throw error_message;
}

let tab = ['paul', 48, true];
tab = [false, 27, 'maria'];
// tab = [{nom: 'Dominique'}]; Impossible (string, number, boolean) par inférence

// enums
enum Couleur{RED,
     GREEN = 4,
     BLUE}

let macouleur: Couleur = Couleur.BLUE;

