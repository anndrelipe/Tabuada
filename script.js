let action = window.document.getElementById('gerar')
action.addEventListener('click', valor_input)
let tabuada = document.getElementById('tabuada')

function valor_input() {
    var a = window.document.getElementById('numeros').value
    tabuada.innerText = '';

    let i = 0;
    while(i <= 10) {
        tabuada.innerHTML += '<p>' + `${i} x ${a} = ${i*a}` + '</p>'; 
        i++
    }
    
}