
        
        function validar(){
            let rs = document.getElementById("rs")
            let categoria = document.getElementById("categoria").value;
            let descricao = document.getElementById("descricao").value;

            let is_categoria = document.getElementById("is_categoria")
            let is_descricao = document.getElementById("is_descricao")

            if(!categoria){
                is_categoria.textContent = "Preencha a categoria";
                alert("Preencher o campo categoria") 
                return false;
            }else if(!descricao){
                is_categoria.textContent = "";
                is_descricao.textContent = "Preencha a descrição";
                alert("Preencher o campo descrição") 
                return false;
            }

            is_categoria.textContent = "";
            is_descricao.textContent = "";

            console.log('categoria: ' + categoria)
            console.log('descrição: ' + descricao)

            rs.textContent = "Descrição: sucesso";

            alert("Função validar: sucesso") 
            
            inserir()
        }
        
        function inserir(){
            const url = "http://localhost:3000/categoria"

            let nome = document.getElementById("categoria").value
            let descricao = document.getElementById("descricao").value
            
            const categoria = {  nome,descricao }
            
            console.log("recebido os valores \n " + JSON.stringify(categoria))

            fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(categoria)
            })

            return console.log(categoria)
        }

        document.querySelector("button").onclick = function(event){ 
            event.preventDefault();
            validar()
        }