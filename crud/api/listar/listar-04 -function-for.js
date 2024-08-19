const listar = () => {
    fetch("http://localhost:3000/categoria")
    .then((response) => { return response.json(); })
    .then( (data) => { return console.log(JSON.stringify(data)) } )
    // .then( (data) => { return console.log(JSON.stringify(data['0'])) } )
    //.then( (data) => { return console.log(data) } )
}
let lista = listar();
for( item in lista){ console.log(item);  }

// for( item in lista) { item => `<li>${item.nome} - ${item.descricao}</li>` }