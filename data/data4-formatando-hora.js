// Entrada de datas
const data1 = new Date('2023-04-16T12:10:05Z')
const data2 = new Date();

// inicio condição 1

// pegar as horas subtraindo o UTC
const hora1 = data1.getHours()
const horasSemUTC1 = data1.getUTCHours()
const min1 = data1.getMinutes()

console.log('\n ---------------------------- condição 1 ---------------------------')
console.log('horas: ' + data1)
console.log('Horas ' + hora1 + ':' + min1)

// fim condição 1

// inicio condição 2
console.log('\n ---------------------------- condição 2 ---------------------------')
const h = data2.getHours().toString().padStart(2, '0')
const m = data2.getMinutes().toString().padStart(2, '0')

console.log('horas: ' + data2)
console.log('Horas ' + h + ':' + m)

// fim condição 2