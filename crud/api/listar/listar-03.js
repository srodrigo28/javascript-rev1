fetch("http://localhost:3000/categoria")
.then((response) => { return response.json(); })
.then((data) => { console.log(data); })