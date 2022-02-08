function writeProps(obj){
    const div = document.getElementById('text-here')
    for (prop in obj){
        const p = document.createElement('p');
        p.innerText += "key: " + prop + " | value: " + obj[prop];
        p.classList.add('truc');
        p.onclick = () => alert('salut');
        p.addEventListener('click', () => div.removeChild(p));
        p.addEventListener('click', (event) => console.log(event));
        div.appendChild(p);
    }
}

const o = {
    taille: 180,
    nom: 'Paul',
    age: 47
}

writeProps(o);

// // Méthodes de documents
// document.write('<a href="#">Salut</a>');

// const div = document.getElementById("text-here");
// console.log(div);

// const node_list = document.getElementsByTagName('p');
// console.log(node_list);

// const created = document.createElement('p');
// created.innerText = 'Salut';
// div.appendChild(created);

// // Les nodes
// console.log(div.attributes);
// const fChild = div.firstChild;
// div.appendChild(fChild);

// // Propriétés d'un élément
// // div.innerHTML='<ul><li>from console</li><ul>'; // compris comme HTML
// // div.innerText='<ul><li>from console</li><ul>'; // compris comme texte

// const pTruc = document.querySelector('p.truc');
// console.log(pTruc);

// // Timeout & interval
// // Meth 1
// // function func(){
// //     alert('3 sec se sont passées');
// // }

// // // Meth 2
// // let func = function(){
// //     alert('3 sec se sont passées');
// // }

// // // Meth 3
// // func = () => {
// //     alert('3 sec se sont passées');
// // }

// // setTimeout(func, 3000);

// // Meth 4
// const timeout = setTimeout(() => alert('3 sec se sont passées'), 3000);

// // Mettre fin au time-out avant sa survenue
// function endTimeout(){
//     clearTimeout(timeout);
//     // timeout.endTimeout;
//     console.log('Timeout averted');
// }

// const interval = setInterval(() => alert('3 sec se sont passées'), 3000);

// Mettre fin au time-out avant sa survenue
// function endInterval(){
//     clearInterval(interval);
//     console.log('Interval avorted');
// }

// function getDateTime(){
//     const div = document.getElementById("dh");
//     const p = document.createElement('p');

//     let tabjour = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
//     let tabmois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];

//     let date = new Date();
//     lignedateHeure = "<p>" + tabjour[date.getDay()] + " " +  date.getDate() + " " + tabmois[date.getMonth()] + ' ' + date.getFullYear() + "</p>" + 
//                         "<p>" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "</p>";

//     p.innerHTML=lignedateHeure; 
//     div.appendChild(p);
//     console.log('here')
// }

// setInterval(getDateTime,1000);

// Manip CSS
// const div = document.getElementById("dh");
// let blue = false;
// let int = setInterval(() => {
//     div.style.border = blue ? "3px dashed red" : "3px dashed blue";
//     blue = !blue;
// }, 2000);
// clearInterval(int);

const div = document.getElementById("dh");
let blue = false;
let int = setInterval(() => {
    div.classList.remove( blue ? 'blue-bordered' : 'red-bordered');
    div.classList.add( blue ? 'red-bordered' : 'blue-bordered');
    blue = !blue;
}, 2000);
clearInterval(int);

console.log(getComputedStyle(div));
