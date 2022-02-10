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

function addition(m1: number, m2: number, m3?: number): number{
    // Si je veux pouvoir ne pas donner le paramètre m3
    return m3 ? m1 + m2 + m3 : m1 + m2;
}

// Union de types
let naissance: String | Date; // chaîne ou date
let personne: {nom : String;
                age: number;} = {nom: "Luc", age: 40}; // si je met une propriété de trop ou pas assez, c'est un autre type.

let tabassoc: {
    [nom: string]: Date
} = {Pauline: new Date(),
    "Maria": new Date(),
    'Dominique': new Date()
}

// Je veux définir un tableau associatif où les clés sont les noms de personne et les valeurs un objet contenant le nom de la personne ainsi que sa date de naissance
// en Date ou en chaîne de caractères.
let t1: {[nom: string]: {
    nom: string,
    date: Date | string}} = {lucie: {nom: 'Lucie', date: new Date()}, 
maria: {nom:'Maria', date: new Date()}
};

let t2: {[nom: string]: {
    'nom-famille': string,
    date: Date | string}};

type TabPersonne = {[nom: string]: {
    'nom-famille': string,
    date: Date | string}};

// let t3: TabPersonne = t1;

type Machin = {
    id: number | string,
    alias: {[key: string]: Date}
}[] | null;

let truc: Machin = [{id: 1, alias: {nom: new Date()}}];

type MonType = 'Salut' | 'Au revoir'

let maVar: MonType = 'Salut'; // ou let maVar: MonType = 'Au revoir';

type MonAutreType = (p1: string, p2: number) => never;
let func1: MonAutreType = (p1: string, p2: number) => {
    throw p1 + p2;
}

type Type1 = Date | string;
type Type2 = string | number;
type TypeInter = Type1 & Type2;

let varInter: TypeInter = 'salut';  // Je peux prendre ce qu'il y a de commun aux 2 types.

let object: {
    nom: string,
    date: Date | string
};

// Les tuples
// ensemble d'information où l'on sait le nombre et le type d'information qu'il y aura dans chaque case.
let tuple1 : [string, number, 'y'|'n'] = ['Salut', 15, 'n'];

type Voiture = {
    puissance: number,
    nbreportes: number,
    immatriculation?: string
}

let maVoiture: Voiture = {
    puissance: 88,
    nbreportes: 3,
    immatriculation: 'KYE188'
};
