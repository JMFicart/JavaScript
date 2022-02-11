import { LivreAventure, Produit} from "./classe";

interface Boite<T extends Produit> { // le type T donné  à l'utilisation de Boite devra être
    elements: T[];
    ouvrir: () => T;
}

interface BoiteProduit {
    elements: Produit[];
    ouvrir: () => Produit;
}

interface BoiteString {
    elements: String[];
    ouvrir: () => String;
}

let boiteProduit: Boite<Produit> = {
    elements: [new Produit("Patate", 1)],
    ouvrir: () => {return new Produit("patate", 1); }
}

let boiteAventure: Boite<LivreAventure>;

// let boiteString = Boite<String>; // Impossible String n'est pas un enfant de produit

// mofiier produit1 pour que son prix soit la somme des prixdes produits en param.
// e
function addPrice<T extends Produit>(produit1: T, produit2: T):T{
    produit1.prix += produit2.prix;
    return produit1;
}

let livreAventure: LivreAventure = new LivreAventure("la grande aventure","la belle edition",20, 250, "action")
let produit : Produit = livreAventure;
let produit2: Produit = new Produit("nom", 1);

livreAventure = addPrice(livreAventure, livreAventure);
