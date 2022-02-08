function writeProps(obj){
    const p = document.getElementById('text-here')
    for (prop in obj){
        p.innerHTML += 'key: ' + prop + ' | value: ' + obj[prop] + '<br>'
    }
}

const o = {
    taille: 180,
    nom: 'Paul',
    age: 47
}

writeProps(o);

// Méthodes de documents
document.write('<a href="#">Salut</a>');

const div = document.getElementById("text-here");
console.log(div);

const node_list = document.getElementsByTagName('p');
console.log(node_list);

const created = document.createElement('p');
created.innerText = 'Salut';
div.appendChild(created);

// Les nodes
console.log(div.attributes);
const fChild = div.firstChild;
div.appendChild(fChild);

