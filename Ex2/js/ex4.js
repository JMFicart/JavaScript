var tabColor = ['blue', 'red', 'green'];
var indexColor = 0;

function addItems(){
    const div = document.getElementById('dh');
    const p = document.createElement('p');

    p.innerText += "Element " + indexColor;
    p.style.color = tabColor[indexColor];
    
    div.appendChild(p);

    indexColor++;
    if (indexColor == tabColor.length){
        indexColor = 0;
    }
    document.getElementById("btn").style.background = tabColor[indexColor];
}
