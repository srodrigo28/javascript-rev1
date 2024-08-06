function inserirCategoria(){
    const url = 'http://localhost:8080/api/categoria' // substituir pelo seu endpoint de criação de categorias
    const categoria = {
        nome: "livros",
        descricao: "livros digitais ou impressos"
    }
    /*** 1.
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            nome: document.getElementById("nome").value,
            descricao: document.getElementById("email").value
        })
    })
    */
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(categoria)
    })
}

function atualizarCategoria(){
    const id = 1;
    const url = `http://localhost:8080/api/categoria/${id}` // substituir pelo seu endpoint de criação de categorias
    const url2 = `http://localhost:8080/api/categoria`
    /*** 1. pegando id pela url dados body*/
    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            nome: document.getElementById("nome").value,
            descricao: document.getElementById("email").value
        })
    })
    // fim

   /*** 2. pegando dados pelo incluse o id body
    const categoria = {
        id: 1,
        nome: "livros",
        descricao: "livros digitais ou impressos"
    }
    fetch(url2, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(categoria)
    })
    */
}

async function getCagetoria(){
    url = `http://localhost:8080/api/categoria`
    return await fetch(url)
        .then(response => {
            return response.json();
        }).then((data) => {
            console.log(data)
            return data
        });
}

// inserirAluno()
getCagetoria()
