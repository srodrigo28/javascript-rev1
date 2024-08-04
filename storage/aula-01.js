var btn = document.querySelector("#cadastrar")

function cadastrar(){
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    var usuario = {
        nome: nome,
        email: email,
        senha: senha
    }

    var json = JSON.stringify(usuario)
    localStorage.setItem(nome, json)
    console.log('usuario');
}

btn.addEventListener("click", function(e) {
    e.preventDefault()

    alert('Hello world!')

    cadastrar()
})