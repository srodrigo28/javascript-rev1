const listar = () => {
    fetch("http://localhost:3000/categoria")
    .then((response) => { return response.json(); })
    .then((data) => { console.log(JSON.stringify(data)); })
}
listar()