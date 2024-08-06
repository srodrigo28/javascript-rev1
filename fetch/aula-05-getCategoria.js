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

getCagetoria();