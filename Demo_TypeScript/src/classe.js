var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Produit = /** @class */ (function () {
    // Définition d'un constructeur en typescript
    function Produit(nom, prix, marque) {
        // Les paramètres optionnelles sont mis en dernier lieu
        this._nom = nom;
        this._marque = marque ? marque : 'inconnu';
        this._prix = prix;
    }
    Object.defineProperty(Produit.prototype, "nom", {
        get: function () {
            console.log("Je passe par içi");
            return this._nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produit.prototype, "marque", {
        get: function () {
            return this._marque;
        },
        set: function (value) {
            this._marque = value;
        },
        enumerable: false,
        configurable: true
    });
    Produit.prototype.vendre = function (qte) {
        var qteeffective = (qte ? qte : 1);
        console.log(qteeffective + ' ' + this._nom + ' ont été vendus (total : ' + (qteeffective * this._prix) + ')');
    };
    return Produit;
}());
var LivreAventure = /** @class */ (function (_super) {
    __extends(LivreAventure, _super);
    function LivreAventure(titre, marque, prix, nbrePages, genre) {
        var _this = _super.call(this, titre, prix, marque) || this;
        _this.lire = function () {
            console.log('Je lis');
        };
        _this.titre = titre;
        _this.nbrePages = nbrePages;
        _this.genre = genre;
        return _this;
    }
    LivreAventure.prototype.vendre = function (qte) {
        console.log('Je vends');
    };
    return LivreAventure;
}(Produit));
var monProduit = new Produit('banane', 2, 'Chiquita');
monProduit.vendre(4);
var livre = new LivreAventure("titre", "editeur", 15, 100, "action");
// livre.vendre(4); // plus possible
livre.vendre();
var bouquin = livre.nom;
livre.marque = "Nouvelle Marque";
//const func: FuncLivre = (param: LivreAventure) => {return param.nbrePage;}
// Pas possible il faut que cela soit un livre.
