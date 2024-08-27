var email = "";
var password = ""

function login(email, password) {
    if(email || password){
        return console.log("validei")
    }else{
        return console.log("não valido")
    }
    console.log('escapou do if')
}

login(email, password)