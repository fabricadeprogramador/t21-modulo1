var cont = 0;
var ehEdicao = false;
var idEdicao = null;

class ListaConvidado {
    adicionar() {

        let nomeConvidado = document.getElementById('inputNome').value;
        let idadeConvidado = document.getElementById('inputIdade').value;
        let elementoSexoSelecionado = document.querySelector("input[type=radio]:checked");
        let sexoConvidado = "";


        if (elementoSexoSelecionado != null) {
            sexoConvidado = elementoSexoSelecionado.value;
        }

        let tabela = document.querySelector("#tbody");
        let erros = "";

        if (nomeConvidado == "") {
            erros += "Campo nome é obrigatório!\n";
        }

        if (idadeConvidado == "") {
            erros += "Campo idade é obrigatório!\n";
        }

        if (sexoConvidado == "") {
            erros += "Campo sexo obrigatório!\n";
        }

        if (erros != "") {
            window.alert(erros);
        } else if(!ehEdicao){
            let linha = tabela.insertRow(cont);
            linha.setAttribute("id", "linha-" + cont);
            let celulaNome = linha.insertCell(0);
            let celulaIdade = linha.insertCell(1);
            let celulaSexo = linha.insertCell(2);
            let celulaEditar = linha.insertCell(3);
            let celulaExcluir = linha.insertCell(4);

            let imagemExcluir = document.createElement("img");
            imagemExcluir.setAttribute("onclick", "listaConvidado.remover(" + cont + ")");
            imagemExcluir.src = "img/garbage.svg";

            let imagemEditar = document.createElement("img");
            imagemEditar.setAttribute("onclick", "listaConvidado.editar('" + nomeConvidado + "','" + idadeConvidado + "','" + sexoConvidado + "','" + cont + "')");
            imagemEditar.src = "img/editar.svg";

            celulaNome.innerHTML = nomeConvidado;
            celulaIdade.innerHTML = idadeConvidado;
            celulaSexo.innerHTML = sexoConvidado;
            celulaEditar.appendChild(imagemEditar);
            celulaExcluir.appendChild(imagemExcluir);

            document.getElementById("inputNome").value = "";
            document.getElementById("inputIdade").value = "";
            document.querySelector("input[type=radio]:checked").checked = false;

            cont++;
        }else{

            let elementoEdicao = document.getElementById("linha-" + idEdicao);
            elementoEdicao.remove();

            let linha = tabela.insertRow(idEdicao);
            linha.setAttribute("id", "linha-" + idEdicao);
            let celulaNome = linha.insertCell(0);
            let celulaIdade = linha.insertCell(1);
            let celulaSexo = linha.insertCell(2);
            let celulaEditar = linha.insertCell(3);
            let celulaExcluir = linha.insertCell(4);

            let imagemExcluir = document.createElement("img");
            imagemExcluir.setAttribute("onclick", "listaConvidado.remover(" + idEdicao + ")");
            imagemExcluir.src = "img/garbage.svg";

            let imagemEditar = document.createElement("img");
            imagemEditar.setAttribute("onclick", "listaConvidado.editar('" + nomeConvidado + "','" + idadeConvidado + "','" + sexoConvidado + "','" + idEdicao + "')");
            imagemEditar.src = "img/editar.svg";

            celulaNome.innerHTML = nomeConvidado;
            celulaIdade.innerHTML = idadeConvidado;
            celulaSexo.innerHTML = sexoConvidado;
            celulaEditar.appendChild(imagemEditar);
            celulaExcluir.appendChild(imagemExcluir);

            document.getElementById("inputNome").value = "";
            document.getElementById("inputIdade").value = "";
            document.querySelector("input[type=radio]:checked").checked = false;

            ehEdicao = false;
        }
    }

    remover(id) {
        if (window.confirm("Tem certeza que deseja remover este convidado?")) {
            let linhaARemover = document.getElementById("linha-" + id);
            linhaARemover.remove();
        }
    }

    editar(nome, idade, sexo, id) {
        document.getElementById("inputNome").value = nome;
        document.getElementById("inputIdade").value = idade;

        if (sexo == "M") {
            document.getElementById("inputMasc").checked = true;
        } else {
            document.getElementById("inputFem").checked = true;
        }

        ehEdicao = true;
        idEdicao = id;
    }

    limpar() {
        document.getElementById("inputNome").value = "";
        document.getElementById("inputIdade").value = "";
        document.querySelector("input[type=radio]:checked").checked = false;
        ehEdicao = false;
    }
}

var listaConvidado = new ListaConvidado();