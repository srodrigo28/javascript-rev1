new Promise((resolve, reject) => {
    setTimeout( () => {
        // resolve("promise resolvida")
        reject("error ao executar")
        console.log(27+107)
    }, 1000)
}).then((data) => {
    console.log(data);
}).catch((reject) => {
    console.log('error ' + reject)
})