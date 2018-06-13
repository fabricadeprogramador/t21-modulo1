class CadastroCliente{

    validar(){

        let mensagemFinal = "";

        let nome = document.getElementById("inputNome").value;
        let sexoM = document.getElementById("masc");
        let sexoF = document.getElementById("fem");

        let foto = document.getElementById("foto").files[0];

        let qtdeCursos = document.querySelectorAll("[type=checkbox]:checked").length;
        

        if(nome == ""){
            // window.alert("Preencha o campo nome");
            mensagemFinal = mensagemFinal + "Preencha o campo nome\n";
        }

        if(!sexoM.checked && !sexoF.checked){
                // window.alert("Selecione um sexo!");
            mensagemFinal = mensagemFinal + "Selecione um sexo\n";                
        }

        if(qtdeCursos == 0){
            // window.alert("Selecione pelo menos um curso de interesse!");
            mensagemFinal += "Selecione pelo menos um curso de interesse\n";                            
        }

        if(foto == null){
            mensagemFinal += "Faça o upload da foto\n"
        } else if(foto.size > 100000){
            mensagemFinal += "A foto deve possuir até 1MB\n"
        } else if(foto.type != "image/jpeg"){
            mensagemFinal += "O formato da imagem deve ser JPG\n"
        }

        // window.alert(mensagemFinal);
        document.querySelector("#textoMensagem").innerText = mensagemFinal;
        document.querySelector(".mensagens").classList.add("show");
        
    }
}

var cad = new CadastroCliente();