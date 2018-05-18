class Estacionamento { //Definição da classe estacionamento
    //Construtor = responsável pela definição dos atributos do objeto e é chamado no momento da criação
    //de uma instância da classe (new Estacionamento())
    constructor() {
        //Os atributos definidos dentro do construtor são referentes ao objeto criado, ou seja, cada objeto criado pelo
        // construtor vai ter 2 atributos nesse caso, lista e indiceEditar
        this.lista = [];
        this.indiceEditar = null;
    }

    lerCarro() {
        let carro = {}; //Criação de um objeto chamado "carro", vazio

        // Setando os atributos nome, marca e ano do objeto carro criado anteriormente, valor vindo dos inputs da tela
        carro.nome = document.getElementById('inputNome').value;
        carro.marca = document.getElementById('inputMarca').value;
        carro.ano = document.getElementById('inputAno').value;

        //Verifica se o carro é válido
        if(this.validar(carro)){
            carro.ano = parseInt(carro.ano); // Converte o valor de ano da tela pra inteiro
            return carro; // Retorna o objeto carro criado
        }
        
        return null; // Retorna null pois o carro é inválido
    }

    //Método responsável por validar os dados da tela
    validar(carro) {
        let erros = ""; //Variável que servirá de retorno

        //Verifica se o atributo nome do objeto carro foi preenchido
        if (carro.nome == "") {
            erros += "Informe o nome!\n";
        }

        //Verifica se o atributo marca do objeto carro foi preenchido
        if (carro.marca == "") {
            erros += "Informe a marca!\n";
        }

        //Verifica se o atributo ano do objeto carro foi preenchido
        if (carro.ano == "") {
            erros += "Informe o ano!\n";
        } 
        
        if (erros != "") {
            window.alert(erros); //Exibe uma mensagem de erro no alerta, caso exista
            return false; //Retorna false caso o carro não seja valido
        }

        return true; //Retorna true caso o carro seja válido

    }

    //Método responsável por limpar os campos de input e desmarcar a flag de edição caso
    //ela tenha sido marcada
    cancelar() {
        document.getElementById("inputNome").value = "";
        document.getElementById("inputMarca").value = "";
        document.getElementById("inputAno").value = "";
        this.indiceEditar = null;
    }

    //Método responsável por adicionar o carro no array (lista)
    // reconstruir a tabela
    // limpar os campos
    adicionar(carro) {
        this.lista.push(carro);
        this.construirTabela();
        this.cancelar();
    }

    //Método responsável por percorrer o array e construir a tabela
    // baseada nos elementos da lista
    construirTabela() {
        //Pega o elemento da tabela e zera pra evitar duplicar os valores antigos
        let tabela = document.querySelector("tbody");
        tabela.innerHTML = "";

        //Laço para percorrer o array
        for (let i = 0; i < this.lista.length; i++) {
            let linha = tabela.insertRow(); //Insere uma linha na tabela
            let colunaNome = linha.insertCell(0); //Insere a primeira coluna na linha
            let colunaMarca = linha.insertCell(1); //Insere a segunda coluna na linha 
            let colunaAno = linha.insertCell(2); //Insere a terceira coluna na linha
            let colunaEditar = linha.insertCell(3); //Insere a quarta coluna na linha
            let colunaExcluir = linha.insertCell(4); //Insere a quinta coluna na linha

            colunaNome.innerHTML = this.lista[i].nome; //Seta a primeira coluna com o atributo nome do carro na posição corrente(i)
            colunaMarca.innerHTML = this.lista[i].marca; //Seta a segunda coluna com o atributo marca do carro na posição corrente(i)
            colunaAno.innerHTML = this.lista[i].ano; //Seta a terceira coluna com o atributo ano do carro na posição corrente(i)

            let imgExcluir = document.createElement("img"); //Cria o elemento que irá conter a imagem de exlusão 
            imgExcluir.src = "img/garbage.svg"; //Seta o caminho da imagem
            imgExcluir.setAttribute("onclick", "estacionamento.remover(" + i + ")"); //Seta o onclick da imagem passando a posição do elemento no array como parâmetro


            let imgEditar = document.createElement("img"); //Cria o elemento que irá conter a imagem da edição
            imgEditar.src = "img/editar.svg"; //Seta o caminho da imagem
            imgEditar.setAttribute("onclick", "estacionamento.editar(" + i + ")"); //Seta o onclick da imagem passando a posição do elemento no array como parâmetro      

            colunaEditar.appendChild(imgEditar); //Adiciona o elemento da imagem de edição criado acima, dentro da terceira columa da linha
            colunaExcluir.appendChild(imgExcluir); //Adiciona o elemento da imagem de edição criado acima, dentro da quarta coluna da linha
        }
    }

    //Método responsável por verificar se trata-se de uma adição de elemento novo ou edição
    salvar() {
        let carro = this.lerCarro(); //Lê o carro da tela, invocando o método lerCarro

        //Verifica se o carro retornado é válido 
        if(carro != null){
            if (this.indiceEditar == null) { //Verifica se é uma adição, ou seja, flag indiceEditar está nula
                this.adicionar(carro); //Chama o método de adição
            } else {
                this.salvarEdicao(carro); //Chama o método para salvar os dados da edição
            }
        }
        //Caso o carro lido seja inválido (algum campo não preenchido pelo usuário) ele simplesmente não faz nada
    }

    //Método responsável por concluir a edição
    salvarEdicao(carro) {
        this.lista.splice(this.indiceEditar, 1, carro); //Usa o atributo indiceEditar que contem a posição do elemento pra edição no array, remove 1 elemento e adiciona o novo no lugar
        this.construirTabela();
        this.cancelar();
    }

    //Método responsável por remover um determinado elemento da lista
    remover(i) {
        if (window.confirm("Tem certeza que deseja remover esse elemento?")) {
            this.lista.splice(i, 1);
            this.construirTabela();
        }
    }

    //Método responsável por sinalizar a operação de edição
    //Ao clicar no ícone de edição de algum elemento da lista esse método
    //guarda a posição clicada e carrega os elementos nos campos pra edição
    editar(i) {
        this.indiceEditar = i; //Seta a posição clicada
        //Coloca os dados do elemento da posição clicada nos campos de input
        document.getElementById('inputNome').value = this.lista[i].nome;
        document.getElementById('inputMarca').value = this.lista[i].marca;
        document.getElementById('inputAno').value = this.lista[i].ano;
    }

    //Método responsável por encontrar o carro mais novo, mais velho da lista
    //e calcular a média dos anos, além de carregar esses dados na tela
    relatorio() {
        //Verifica se a lista não está vazia
        if (this.lista.length == 0) {
            return; //Aborta a execução do método nesse caso
        }

        //Seta as a variável "maisVelho" e "maisNovo" como sendo o primeiro elemento da lista
        //e a variavel para calcular a soma dos anos
        let maisVelho = this.lista[0].ano;
        let maisNovo = this.lista[0].ano;
        let somaDosAnos = 0;

        //Percorre o array para encontrar o carro mais velho, o mais novo e somar os anos de todos
        for (let i = 0; i < this.lista.length; i++) {
            //Verifica se o carro da posição i é mais velho que o da variável "maisVelho"
            if (this.lista[i].ano < maisVelho) {
                maisVelho = this.lista[i].ano;
            }

            //Verifica se o carro da posição i é mais novo que o da variável "maisNovo"
            if (this.lista[i].ano > maisNovo) {
                maisNovo = this.lista[i].ano;
            }

            //Soma o ano desse carro
            somaDosAnos += this.lista[i].ano;
        }

        //Calcula a média (Soma dos anos/ Quantidade de Carros)
        let media = somaDosAnos / this.lista.length;

        //Imprime os valores na tela
        document.getElementById("maisVelho").innerText = "Carro mais velho(Ano): " + maisVelho;
        document.getElementById("maisNovo").innerText = "\nCarro mais novo(Ano): " + maisNovo;
        document.getElementById("media").innerText = "\nMédia: " + media;

    }
}
let estacionamento = new Estacionamento(); //Cria o objeto "estacionamento" da classe Estacionamento