let cep = "74961070"
let url = `https://viacep.com.br/ws/${cep}/json/`
function buscarCep(){
    fetch(url)
    .then( (response) => {
        return response.json();
    }).then( (data) => {
        console.log(data)
    }).catch( () => {
        console.log("error inesperado")
    })
}
buscarCep("74961070")