function getData(calback){
    setTimeout(() => {
        const data = {
            nome: "Seastião",
            idade: 34
        }
        calback(data)
    }, 1000)
}

function processData(data, calback){
    setTimeout( () => {
        data.idade *= 2;

        calback(data)
    }, 2000)
}

function displayData(data){
    console.log(data)
}

getData( (data) => {
    processData(data, (processData) => {
        displayData(processData)
    })
} )