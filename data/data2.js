const dataInicio = Date.now()

setTimeout( () => {
    const milisegundos = Date.now() - dataInicio
    console.log(milisegundos / 1000)
    //console.log(`Tempo gasto: ${milisegundos / 1000} ms`)
}, 5000);

const data1 = new Date('2023-12-13');
const data2 = new Date('2024-01-31');
const diferencaData = data2.getTime() - data1.getTime();
const diffDays = diferencaData / (1000 * 60 * 60 * 24); //seg, horas * dia
console.log("Data inicio: " + data1)
console.log("Data fim: " + data2)
console.log("Calculo entre datas: " + diffDays + " dias");