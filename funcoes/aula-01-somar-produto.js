console.log('4 Funções para iniciamos')

var valor1 = 200;
var valor2 = 500;

function calcular1(a, b){
    return console.log("Resultado 1: " + a + b + " Aqui deu ruim");
}
calcular1(valor1, valor2);

function calcular2(a, b){
    return console.log("Resultado 2: " + a + b + " Aqui deu ruim");
}
calcular2(parseInt(valor1), parseInt(valor2));

function calcular3(a, b){
    return console.log("Resultado 3: ", a + b);
}
calcular3(parseInt(valor1), parseInt(valor2));

function calcular4(a, b){
    return console.log("Resultado 4: ", parseInt(a) + parseInt(b));
}
calcular4(valor1, valor2);

// desafio pegar o valor vindo de um formulário e imprir em p ou span html.
// com botão calcular valor x valor
// segunda opção calcular quantidade x preço
// terceiro opção calcular valor de compra x margem de lucro valor de venda.