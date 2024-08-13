let url = "https://viacep.com.br/ws/01001000/json/"
    fetch(url)
    .then( (response) => {
        return response.json();
    }).then( (data) => {
        console.log(data)
    }).catch( () => {
        console.log("error inesperado")
    })