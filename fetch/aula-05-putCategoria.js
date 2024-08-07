
function atualizarCategoria1(){ // alterando pssando o id na url
    const id = 1;
    const url = `http://localhost:8080/api/categoria/${id}` // substituir pelo seu endpoint de criação de categorias
    /*** 1. pegando id pela url dados body*/
    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            nome: document.getElementById("nome").value,
            descricao: document.getElementById("email").value
        })
    })
}

function atualizarCategoria2(){ // alterando passando id no body
    const url = `http://localhost:8080/api/categoria`
    const categoria = {
        id: 1,
        nome: "livros",
        descricao: "livros digitais ou impressos"
    }
    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(categoria)
    })
}
