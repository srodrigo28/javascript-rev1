const data = new Date('2024-08-03T12:00:05Z');

// dia do mês é de 01 ao 30
const dia = data.getDate();

// dia da semana
const diaSemana = data.getDay();

// mês é de 0 a 11
const mes = data.getMonth() + 1;

// ano atual
const ano = data.getFullYear();

console.log(' --------------------- Condição 1 ------------------------')

console.log('Dia do mês ' + dia)
console.log('Dia da semana ' + diaSemana)
console.log('Mes do ano ' + mes)
console.log('data atual ' + dia + '/' + mes + '/' + ano)
// console.log(dia);

console.log('\n --------------------- Condição 2 ------------------------')

const dia2 = data.getDate().toString().padStart(2, '0');

// mês é de 0 a 11
const mes2 = (data.getMonth() + 1).toString().padStart(2, '0');

// ano atual
const ano2 = data.getFullYear();

console.log('Dia do mês ' + dia2)
console.log('Mes do ano ' + mes2)
console.log('data atual ' + dia2 + '/' + mes2 + '/' + ano2)