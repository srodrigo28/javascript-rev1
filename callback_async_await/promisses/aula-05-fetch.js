let url = "https://viacep.com.br/ws/01001000/json/"
function getUser(){
    return new Promise( (resolve, reject) => {
        fetch(url)
        .then( (response) => {
            resolve(response.json())
        })
        .catch( () => {
            reject("error inesperado")
        })
    })
}
getUser()
    .then( (data) => { console.log(data) } )