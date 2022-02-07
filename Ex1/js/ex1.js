// let chaine = "ma formation javascript";
// console.log(chaine);
// console.log(chaine.indexOf("ma", 0));

// indicep = chaine.indexOf("p", 0);
// console.log(indicep);

// indice21 = chaine.charAt(21);
// console.log(indice21);

// chaine2 = chaine.replace("javascript", "Java");
// console.log(chaine2);

// tab = chaine.split(" ");
// console.log(tab);

// // tab = chaine.split("");
// // tab = tab.reverse();
// // chaine2 = tab.join('');
// // console.log(chaine2);

// console.log(chaine.split("").reverse().join(''));
//************************************************************************************/
// var date = new Date();
// // console.log(date);
// let jour = date.getDay();
// let message = "Bonjour, nous sommes ?!";
// let joursemaine = "";
// switch (jour) {
//     case 0:
//         joursemaine = "dimanche";
//         break;
//     case 1:
//         joursemaine = "lundi";
//         break;
//     case 2:
//         joursemaine = "mardi";
//         break;
//     case 3:
//         joursemaine = "mercredi";
//         break;
//     case 4:
//         joursemaine = "jeudi";
//         break;
//     case 5:
//         joursemaine = "vendredi";
//         break;
//     case 6:
//         joursemaine = "samedi";
//         break;
// }
// message = message.replace("?", joursemaine);
// console.log(message);

//************************************************************************************/
for (let i = 0; i <= 10; i++){
    console.log("A".repeat(i+1));
}

//************************************************************************************/
const hauteur = parseInt(prompt("Taille = "));
if (!isNaN(hauteur)){
    for(let i = 1; i <= hauteur; i++){
        console.log(" ".repeat(hauteur - i) + "*".repeat( (i * 2) - 1));
    }
    console.log(" ".repeat((hauteur <= 3 ? hauteur - 1 : hauteur - 2)) + (hauteur <= 3 ? "*" : "***"));
}

//************************************************************************************/
let tabjour = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
console.log("Bonjour, nous sommes ?!".replace("?", tabjour[new Date().getDay()]));
// new Date().toLocaleString
