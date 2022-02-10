function addLine(){
    const new_line = document.createElement('tr');
    const foot = document.getElementById('table-foot').firstElementChild;
    const tbody = document.getElementById('table-body');

    for(let index = 0; index < foot.children.length; index++){
        const cellule = document.createElement('td');
        const input = document.createElement('input');

        input.onchange = () => totalColumn(index);

        cellule.appendChild(input);
        new_line.appendChild(cellule);
    }
    tbody.appendChild(new_line);
}

let columns = 0;

function addColumn(){
    const lines = document.querySelectorAll('#table tr');
    let cellule;

    for(let i=0; i <lines.length; i++){
        if (i == 0){
            cellule = document.createElement('th');

            cellule.innerText = lines[i].children.length + 1;

        } else if (i == lines.length - 1){
            cellule = document.createElement('td');
            const total = document.createElement('input');

            total.disabled = true;
            cellule.appendChild(total);

        } else if (typeof i == 'number') {
            cellule = document.createElement('td');
            const input = document.createElement('input');

            //const line = 
            input.onchange = () => totalColumn(lines[i].children.length);

            cellule.appendChild(input);
        }
        lines[i].appendChild(cellule);
    }
}

function totalColumn(index){
    let total = 0;
    const lines = document.getElementById('table-body').children;
    const inputTotal = document.getElementById('table-foot').firstElementChild.children[index].firstElementChild;
    
    for(let i = 0; i < lines.length; i++){
        const input = lines[i].children[index].firstElementChild;
        const value = parseInt(input.value);
        if (value || value == 0){
            total += parseInt(value)
        }
    }
    inputTotal.value = total;
}

