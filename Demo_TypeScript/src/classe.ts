export class Produit {
    private readonly _nom: string;
    private _marque: string;
    private _prix: number;

    // Définition d'un constructeur en typescript
    constructor(nom: string, prix: number, marque?: string) {
        // Les paramètres optionnelles sont mis en dernier lieu
        this._nom = nom;
        this._marque = marque ? marque : 'inconnu';
        this._prix = prix;
    }

    get nom(){
        console.log("Je passe par içi");
        return this._nom;
    }

    get marque(){
        return this._marque;
    }

    set marque(value: string){
        this._marque = value;
    }

    get prix(){
        return this._prix;
    }

    set prix(value: number){
        this._prix = value;
    }

    vendre(qte?: number){
        const qteeffective = (qte ? qte : 1 );
        console.log(qteeffective + ' ' + this._nom + ' ont été vendus (total : ' + (qteeffective * this._prix) + ')');
    }
}

export class LivreAventure extends Produit implements Livre {
    titre: string;
    nbrePages: number;
    genre: 'action' | 'romance';
    nomAuteur?: string | undefined;

    constructor(titre: string, marque: string, prix: number, nbrePages: number, genre: 'action'|'romance'){
        super(titre, prix, marque);
        this.titre = titre;
        this.nbrePages = nbrePages;
        this.genre = genre;
    }

    vendre(qte?: number): void {
        console.log('Je vends');
    }

    lire = () => {
        console.log('Je lis');
    };
}

let monProduit: Produit = new Produit('banane', 2,'Chiquita',);
monProduit.vendre(4);

let livre = new LivreAventure("titre","editeur",15,100,"action");
// livre.vendre(4); // plus possible
livre.vendre();
let bouquin = livre.nom;
livre.marque = "Nouvelle Marque";

type FuncLivre = (param: Livre) => number;

//const func: FuncLivre = (param: LivreAventure) => {return param.nbrePage;}
// Pas possible il faut que cela soit un livre.
