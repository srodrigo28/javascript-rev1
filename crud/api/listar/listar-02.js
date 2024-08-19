// alert('listando ...');
let url = "http://localhost:3000/categoria"
fetch(url)
.then((response) => { return response.json(); })
.then((data) => { console.log(data); })