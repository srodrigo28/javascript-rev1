cep = "01001000";
url = `http://viacep.com.br/ws/${cep}/json`
fetch(url)
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