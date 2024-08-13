var url = ""
new Promise( (resolve, reject) => {
    fetch(url, { 
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    })
    .then((resolve) => {
        console.log("sucesso: " + resolve)
    })
    .catch( (error) => {
        console.log("error: " + error)
    })
})