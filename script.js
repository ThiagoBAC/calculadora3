
function adicionarOperador(botaoClicado) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + botaoClicado;

    console.log(botaoClicado);
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function apagar1() {
    let apagar = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = apagar.substring(0, apagar.length-1);
}

function Calcular() {
    let calc = document.getElementById('resultado').innerHTML;
    if(calc) {
        document.getElementById('resultado').innerHTML = eval(calc);
    }
    
}
