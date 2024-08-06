async function getCep(cepParam = "01001000"){
    url = `http://viacep.com.br/ws/${cepParam}/json`
    return await fetch(url)
        .then(response => {
            //console.log(response);
            return response.json();
        }).then((data) => {
            console.log(data)
            return data
        });
}

getCep("74961070");