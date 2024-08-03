/*** Calculando valor do produto x quantidade */

console.log('Calculando valor do produto preço: x quantidade')

// Declaração de variaveis
var valor = 1.85;
var qtd = 940;

// Calculando ...
function calcular1(a, b){
    return console.log("Resultado : ", parseInt(a) * parseInt(b));
}

// Passando valor para função essa função espera preço e quantidade
calcular1(valor, qtd);

function calcular2(a, b){
    return console.log("Resultado : ", parseFloat(a) * parseFloat(b));
}
calcular2(valor, qtd);