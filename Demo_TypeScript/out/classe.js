"use strict";
class Produit {
    // Définition d'un constructeur en typescript
    constructor(nom, prix, marque) {
        // Les paramètres optionnelles sont mis en dernier lieu
        this._nom = nom;
        this._marque = marque ? marque : 'inconnu';
        this._prix = prix;
    }
    get nom() {
        console.log("Je passe par içi");
        return this._nom;
    }
    get marque() {
        return this._marque;
    }
    set marque(value) {
        this._marque = value;
    }
    vendre(qte) {
        const qteeffective = (qte ? qte : 1);
        console.log(qteeffective + ' ' + this._nom + ' ont été vendus (total : ' + (qteeffective * this._prix) + ')');
    }
}
class LivreAventure extends Produit {
    constructor(titre, marque, prix, nbrePages, genre) {
        super(titre, prix, marque);
        this.lire = () => {
            console.log('Je lis');
        };
        this.titre = titre;
        this.nbrePages = nbrePages;
        this.genre = genre;
    }
    vendre(qte) {
        console.log('Je vends');
    }
}
let monProduit = new Produit('banane', 2, 'Chiquita');
monProduit.vendre(4);
let livre = new LivreAventure("titre", "editeur", 15, 100, "action");
// livre.vendre(4); // plus possible
livre.vendre();
let bouquin = livre.nom;
livre.marque = "Nouvelle Marque";
//const func: FuncLivre = (param: LivreAventure) => {return param.nbrePage;}
// Pas possible il faut que cela soit un livre.
