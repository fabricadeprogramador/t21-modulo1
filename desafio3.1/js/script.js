class ListaConvidado {

    constructor(){
        this.cont = 0;
        this.idEdicao = null;
    }

    lerConvidado(){
        let convidado = {}
        
        convidado.nome = document.getElementById('inputNome').value;
        convidado.idade = document.getElementById('inputIdade').value;
        
        let elementoSexoSelecionado = document.querySelector("input[type=radio]:checked");
        let sexoConvidado = "";

        if (elementoSexoSelecionado != null) {
            convidado.sexo = elementoSexoSelecionado.value;
        }
            
        return convidado;
    }

    validar(convidado){
        
        let erros = "";

        if (convidado.nome == "") {
            erros += "Campo nome é obrigatório!\n";
        }

        if (convidado.idade == "") {
            erros += "Campo idade é obrigatório!\n";
        }

        if (convidado.sexo == "") {
            erros += "Campo sexo obrigatório!\n";
        }

        return erros;
    }

    inserirLinha(convidado){

        let tabela = document.querySelector("#tbody");
        let linha = tabela.insertRow(convidado.id);

        linha.setAttribute("id", "linha-" + convidado.id);
        let celulaNome = linha.insertCell(0);
        let celulaIdade = linha.insertCell(1);
        let celulaSexo = linha.insertCell(2);
        let celulaEditar = linha.insertCell(3);
        let celulaExcluir = linha.insertCell(4);

        let imagemExcluir = document.createElement("img");
        imagemExcluir.setAttribute("onclick", "listaConvidado.remover(" + this.cont + ")");
        imagemExcluir.src = "img/garbage.svg";

        let imagemEditar = document.createElement("img");
        imagemEditar.setAttribute("onclick", "listaConvidado.editar("+ JSON.stringify(convidado) +")");
        imagemEditar.src = "img/editar.svg";

        celulaNome.innerHTML = convidado.nome;
        celulaIdade.innerHTML = convidado.idade;
        celulaSexo.innerHTML = convidado.sexo;

        celulaEditar.appendChild(imagemEditar);
        celulaExcluir.appendChild(imagemExcluir);

    }

    removerLinha(id){
        let linhaARemover = document.getElementById("linha-" + id);
        linhaARemover.remove();
    }

    salvar(){

        if(this.idEdicao == null){
            this.adicionar(this.cont);
            this.cont++;
        }else {
            this.removerLinha(this.idEdicao);
            this.adicionar(this.idEdicao);
        }

        this.limparFormulario();
        this.idEdicao = null;

    }

    adicionar(id) {

        let convidado = this.lerConvidado();
        convidado.id = id;
        let erros = this.validar(convidado);

        if (erros != "") {
            window.alert(erros);
            return;
        } 

        this.inserirLinha(convidado);
    }

    remover(id) {
        if (window.confirm("Tem certeza que deseja remover este convidado?")) {
            this.removerLinha(id);
        }
    }

    editar(convidado) {
        
        document.getElementById("inputNome").value = convidado.nome;
        document.getElementById("inputIdade").value = convidado.idade;

        if (convidado.sexo == "M") {
            document.getElementById("inputMasc").checked = true;
        } else {
            document.getElementById("inputFem").checked = true;
        }

        this.idEdicao = convidado.id;

    }

    limparFormulario() {
        document.getElementById("inputNome").value = "";
        document.getElementById("inputIdade").value = "";
        document.querySelector("input[type=radio]:checked").checked = false;
        this.ehEdicao = false;
        this.idEdicao = null;
    }
}

var listaConvidado = new ListaConvidado();