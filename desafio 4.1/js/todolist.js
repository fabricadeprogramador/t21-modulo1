class TodoList {

    constructor() {
        this.lista = [];
        this.indiceEdicao = null;
    }

    lerTarefa() {
        let tarefa = {};

        tarefa.descricao = document.getElementById("inputDescricao").value;
        tarefa.feita = false;

        return tarefa;
    }

    salvar() {
        let tarefa = this.lerTarefa();
        if (this.indiceEdicao == null) {
            this.adicionar(tarefa);
        } else {
            this.salvarEdicao(tarefa);
        }

    }

    salvarEdicao(tarefa) {
        this.lista[this.indiceEdicao] = tarefa;
        document.getElementById("imgSalvar").src = "img/add.svg";
        this.limpar();
        this.construirTabela();
    }

    adicionar(tarefa) {
        this.lista.push(tarefa);

        this.limpar();
        this.construirTabela();
    }

    limpar() {
        document.getElementById("inputDescricao").value = "";
        this.indiceEdicao = null;
    }

    construirTabela() {
        let tabela = document.getElementById("tabelaDeTarefas");
        tabela.innerHTML = "";

        if (this.lista.length == 0) {
            return;
        }

        for (let i = 0; i < this.lista.length; i++) {

            let tarefa = this.lista[i];

            let linha = tabela.insertRow();
            let feito = linha.insertCell(0);
            let descricao = linha.insertCell(1);
            let excluir = linha.insertCell(2);
            let editar = linha.insertCell(3);

            descricao.innerHTML = tarefa.descricao;

            let elementoImagemFeito = document.createElement("img");

            if (tarefa.feita) {
                elementoImagemFeito.src = "img/checked.svg";
            } else {
                elementoImagemFeito.src = "img/unchecked.svg";
            }

            elementoImagemFeito.setAttribute("onclick", "todoList.alterarStatus(" + i + ")");
            feito.appendChild(elementoImagemFeito);

            let elementoImagemEditar = document.createElement("img");
            elementoImagemEditar.src = "img/editar.svg"
            elementoImagemEditar.setAttribute("onclick", "todoList.editar(" + i + ")");


            let elementoImagemExcluir = document.createElement("img");
            elementoImagemExcluir.src = "img/excluir.svg"
            elementoImagemExcluir.setAttribute("onclick", "todoList.excluir(" + i + ")");

            editar.appendChild(elementoImagemEditar);
            excluir.appendChild(elementoImagemExcluir);
        }
    }

    excluir(posicao) {
        if (window.confirm("Tem certeza que deseja remover esta tarefa?")) {
            this.lista.splice(posicao, 1);
            this.construirTabela();
        }
    }

    editar(posicao) {
        this.indiceEdicao = posicao;
        document.getElementById("inputDescricao").value = this.lista[posicao].descricao;
        document.getElementById("imgSalvar").src = "img/go.svg";
    }

    alterarStatus(posicao) {
        if (this.lista[posicao].feita) {
            if (window.confirm("Deseja realmente marcar essa tarefa como NÃO CONCLUÍDA?")) {
                this.lista[posicao].feita = !this.lista[posicao].feita;
                this.construirTabela();
            }
        } else {
            if (window.confirm("Deseja realmente marcar essa tarefa como CONCLUÍDA?")) {
                this.lista[posicao].feita = !this.lista[posicao].feita;
                this.construirTabela();
            }
        }
    }
}

let todoList = new TodoList();