var total = 0;
totalbox = document.getElementById('prixtotal');
totalbox.value = total;

function addItems(){
    // Récupération des données dans la grille tarif.
    var tarif = document.getElementById("tarif"),rIndex,cIndex;
    var article;
    var prix;

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

                    // Ajout des données récupérées.
                    var panier = document.getElementById('panier');

                    var rowCount = panier.rows.length - 1;
                    var row = panier.insertRow(rowCount);

                    var cell1 = row.insertCell(0);
                    cell1.innerHTML = article;

                    var cell2 = row.insertCell(1);
                    cell2.innerHTML = prix;

                    // Mise à jour du total.
                    total += parseInt(prix);
                    totalbox = document.getElementById('prixtotal');
                    totalbox.value = total;
                }
            };
        }
    }
}

// Correction
// mettre ds le html addToCart(this)
function addToCart(clicked){
    const parent = clicked.parentNode;
    const prix = parent.previousElementSibling;
    const article = prix.previousElementSibling;

    const tr = document.createElement('tr');
    const td_article = document.createElement('td');
    const td_prix = document.createElement('td');

    td_article.innerText = article.innerText;
    td_prix.innerText = prix.innerText

    tr.appendChild(td_article);
    tr.appendChild(td_prix);

    const panier = document.getElementById('panier');
    panier.appendChild(tr);

    const total = document.getElementById('total');
    total.value = parseInt(total.value) + parseInt(prix.innerText);
}
