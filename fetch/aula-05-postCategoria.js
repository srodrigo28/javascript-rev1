function inserirCategoria(){
    const url = 'http://localhost:8080/api/categoria' // substituir pelo seu endpoint de criação de categorias
    const categoria = {
        nome: "computadores",
        descricao: "pc gamer, notebooks"
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
inserirCategoria()
