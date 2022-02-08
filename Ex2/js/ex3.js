var tabColor = ['blue', 'red', 'green'];
var indexColor = 0;

function addItems(){
    const div = document.getElementById('dh');
    const p = document.createElement('p');

    p.innerText += "Element";
    p.style.color = tabColor[indexColor];
    
    div.appendChild(p);

    indexColor = (indexColor + 1) % 3;
    document.getElementById("btn").style.background = tabColor[indexColor];
}
