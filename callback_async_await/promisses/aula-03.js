new Promise((resolve, reject) => {
    setTimeout( () => {
        if(Math.random() < 0.5){
            resolve("promise resolvida")
        }else{
            reject("erro ao executar a promise")
        }
    }, 1000)
}).then( (data) => {
    console.log(data)
}).catch( (error) => {
    console.log(error)
})