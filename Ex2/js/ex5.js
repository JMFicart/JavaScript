var total = 0;
totalbox = document.getElementById('prixtotal');
totalbox.value = total;

function addItems(){
    // Récupération des données dans la grille tarif.
    var tarif = document.getElementById("tarif"),rIndex,cIndex;
    var article;
    var prix;
    var qte;

    for(var i = 0; i < tarif.rows.length; i++)
    {
        for(var j = 0; j < tarif.rows[i].cells.length; j++)
        {
            tarif.rows[i].cells[j].onclick = function()
            {
                rIndex = this.parentElement.rowIndex;
                cIndex = this.cellIndex;
                if (cIndex == 2){
                    // Récupération des données choisies.
                    article = tarif.rows[rIndex].cells[cIndex - 2].innerHTML;
                    prix = tarif.rows[rIndex].cells[cIndex - 1].innerHTML;

                    var panier = document.getElementById('panier');

                    var rowCount = panier.rows.length - 1;
                    trouve = false;

                    if (rowCount > 0){
                        // Recherche de données déjà introduites.
                        for(var pi = 0; pi < panier.rows.length - 1; pi++){
                            let articlepanier = panier.rows[pi].cells[0].innerHTML;
    
                            if(articlepanier == article){
                                // Mise à jour des quantités
                                qte = parseInt(panier.rows[pi].cells[2].innerHTML) + 1
                                panier.rows[pi].cells[2].innerHTML = qte;
                                trouve = true;
                                break;
                            } 
                        }
                    } 
                
                    if (!trouve) {
                        // Ajout des données récupérées.
                        var rowCount = panier.rows.length - 1;
                        var row = panier.insertRow(rowCount);

                        var cell1 = row.insertCell(0);
                        cell1.innerHTML = article;

                        var cell2 = row.insertCell(1);
                        cell2.innerHTML = prix;

                        var cell3 = row.insertCell(2);
                        cell3.innerHTML = 1;
                    }

                    recalculTotal();
                }
            };
        }
    }
}

function removeItems(){
    // Récupération des données dans la grille tarif.
    var tarif = document.getElementById("tarif"),rIndex,cIndex;
    var article;
    var prix;
    var qte;

    for(var i = 0; i < tarif.rows.length; i++)
    {
        for(var j = 0; j < tarif.rows[i].cells.length; j++)
        {
            tarif.rows[i].cells[j].onclick = function()
            {
                rIndex = this.parentElement.rowIndex;
                cIndex = this.cellIndex;

                if (cIndex == 3){
                    // Récupération des données choisies.
                    article = tarif.rows[rIndex].cells[cIndex - 3].innerHTML;

                    var panier = document.getElementById('panier');

                    var rowCount = panier.rows.length - 1;
                    trouve = false;

                    if (rowCount > 0){
                        // Recherche de données déjà introduites.
                        for(var pi = 0; pi < panier.rows.length - 1; pi++){
                            let articlepanier = panier.rows[pi].cells[0].innerHTML;

                            if(articlepanier == article){
                                // Mise à jour des quantités
                                qte = parseInt(panier.rows[pi].cells[2].innerHTML) - 1
                                panier.rows[pi].cells[2].innerHTML = qte;

                                if (parseInt(qte) == 0) {
                                    // Suppression de la ligne au cas où il n'y a plus d'article sélectionné
                                    panier.deleteRow(pi);
                                }

                                trouve = true;
                                break;
                            } 
                        }
                    } 
                
                    recalculTotal();
                }
            };
        }
    }
}

function recalculTotal(){
    // Mise à jour du total.
    total = 0;
    for(var pi = 0; pi < panier.rows.length - 1; pi++)
    {
        prix = panier.rows[pi].cells[1].innerHTML;
        qte = panier.rows[pi].cells[2].innerHTML;
        total = total + (parseInt(prix) * parseInt(qte));
    }

    totalbox = document.getElementById('prixtotal');
    totalbox.value = total;
}

// Correction
// mettre ds le html addToCart(this)
function addToCart(clicked){
    const parent = clicked.parentNode;
    const prix = parent.previousElementSibling;
    const article = prix.previousElementSibling;

    const productRow = document.getElementById("produit-panier-" + article.innerText);
    if (productRow){
        const qte_cell = productRow.lastElementChild.innerText++;
    } else {
        const tr = document.createElement('tr');
        const td_article = document.createElement('td');
        const td_prix = document.createElement('td');
        const td_qte = document.createElement('td');
    
        // le champ id doit être rajouté dans la table panier sur le formulaire HTML.
        tr.id = "produit-panier-" + article.innerText;
        td_article.innerText = article.innerText;
        td_prix.innerText = prix.innerText
        td_qte.innerText = 1;

        tr.appendChild(td_article);
        tr.appendChild(td_prix);
        tr.appendChild(td_qte);
    
        const panier = document.getElementById('panier');
        panier.appendChild(tr);
    }

    const tr = document.createElement('tr');
    const td_article = document.createElement('td');
    const td_prix = document.createElement('td');

    tr.id = "produit-panier-" + article.innerText;
    td_article.innerText = article.innerText;
    td_prix.innerText = prix.innerText
    
    tr.appendChild(td_article);
    tr.appendChild(td_prix);

    const panier = document.getElementById('panier');
    panier.appendChild(tr);

    const total = document.getElementById('total');
    total.value = parseInt(total.value) + parseInt(prix.innerText);
}

