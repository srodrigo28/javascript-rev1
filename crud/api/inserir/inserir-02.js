const url = "http://localhost:3000/categoria"
const nome = "nintendo"
const descricao = "o melhor gaminho que joguei"

const categoria = {
    nome: nome,
    descricao: descricao
}

function inserir(){
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)
    })
    .then( response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
inserir()