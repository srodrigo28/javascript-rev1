fetch("http://viacep.com.br/ws/01001000/json")
    .then(response => {
        //console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err)
    })