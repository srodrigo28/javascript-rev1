async function getCagetoria(){
    url = `http://localhost:8080/api/categoria`
    return await fetch(url)
        .then(response => {
            //console.log(response);
            return response.json();
        }).then((data) => {
            console.log(data)
            return data
        });
}

async function deleteCagetoria(){
    const id = 4;
    const url = `http://localhost:8080/api/categoria/${id}`

    return await fetch(url,
        {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
            // body: JSON.stringify(categoria)
        }
    )
        .then(response => {
            return response.json();
        }).then((data) => {
            console.log(data)
        });
}

deleteCagetoria();
// getCagetoria();

// exemplo 2
async function deleteCategoriaSearchParam() {
    return fetch(url + new URLSearchParams({
        id: "5"
    }), { 
        method: "DELETE", 
        headers: {'Content-Type': 'application/json'}
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => { console.log(data)})
}