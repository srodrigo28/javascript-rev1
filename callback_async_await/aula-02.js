const fs = require("fs")

function lerArquivo(caminho, callback){
    fs.readFile(caminho, (error, data) => {
        if(error){
            console.log('Erro ao ler o arquivo ' + error)
        }else{
            callback(data.toString());
        }
    });
}
lerArquivo("./arquivo.txt", (data) => {
    console.log(data)
});