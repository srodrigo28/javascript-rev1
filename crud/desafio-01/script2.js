        let rs = document.getElementById("rs")
        let nome = document.getElementById("categoria");
        let descricao = document.getElementById("descricao");
        function validar(){ // 1. validando formulário
            let is_categoria = document.getElementById("is_categoria")
            let is_descricao = document.getElementById("is_descricao")
            if(!nome.value){
                is_categoria.textContent = "Preencha a categoria";
                alert("Preencher o campo categoria") 
                return false;
            }else if(!descricao.value){
                is_categoria.textContent = "";
                is_descricao.textContent = "Preencha a descrição";
                alert("Preencher o campo descrição") 
                return false;
            }
            is_categoria.textContent = "";
            is_descricao.textContent = "";
            rs.textContent = "Descrição: sucesso";
            inserir() // chamando a função inserir
        }
        function inserir(){ // 2. função inserir com fetch api
            const url = "http://localhost:3000/categoria"
            const categoria = {  nome: nome.value, descricao: descricao.value }

            fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(categoria)
            })
            return alert("Inserido:  " + categoria.nome)
        }
        document.querySelector("#btn").onclick = function(event){ // 0. start adiciona a função click no button
            event.preventDefault();
            validar()
        }