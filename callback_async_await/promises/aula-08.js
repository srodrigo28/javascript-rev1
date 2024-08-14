function getData(){
    return new Promise( (resolve) => {
        setTimeout( () => {
            const data = {
                nome: " Sebastião ",
                idade: 29
            }
            resolve(data)
        }, 1000)
    })
}
function processData(data){
    return new Promise( (resolve) => {
        data.idade *= 2
        resolve(data)
    }, 1000)
}
async function displayData(){
    try{
        const data = await getData()
        const processedData = await processData(data)

        console.log(processedData)
    }catch(error){
        console.log('error' + error)
    }
}
displayData()