class Menu {

    constructor() {
        this.tentativas = 5;
        this.lista = [];
        this.achou = false;
    }

    selecionarMenu() {
        let opcao = document.getElementById("menu-op").value;
        this.voltarMenu();

        switch (opcao) {
            case "1":
                this.impares();
                document.getElementById("opcao1").classList.add("mostrar");
                break;
            case "2":
                document.getElementById("opcao2").classList.add("mostrar");
                break;
            case "3":
                document.getElementById("opcao3").classList.add("mostrar");
                break;
            case "4":
                document.getElementById("opcao4").classList.add("mostrar");
                document.querySelector(".menu").classList.add("opcao");
                break;
            default:
                break;
        }
    }

    impares() {
        let resposta = "";

        for (let index = 0; index < 100; index++) {
            if (index % 2 != 0) {
                resposta += index + " ";
            }
        }

        document.getElementById("resultado").innerText = resposta;
    }

    salvarNome() {
        
        if (this.tentativas > 0 && !this.achou) {
            let nome = document.getElementById("op2-nome").value;

            if (nome != "") {
                this.lista.push(nome);
                this.tentativas--;
            }
            document.getElementById("res-2").innerText = "Tentativas: "+ this.tentativas + " | " + this.lista;

            let i = 0;
            do{
                if(this.lista[i] == "Jão"){
                    this.achou = true;
                    window.alert("Parabéns, você encontrou o nome secreto.");
                    this.voltarMenu();
                    return;
                }
                i++;
            } while(i < this.lista.length);
            document.getElementById("op2-nome").value = "";
            window.alert("Não encontrou o nome correto.");
        } else {
            window.alert("Suas tentativas acabaram!");
            this.voltarMenu();
        }


    }

    ocorrenciasUm() {
        let limite = document.getElementById("op3-input").value;
        if (limite != "")
            limite = parseInt(limite);

        let indice = 0;
        let contador = 0;
        let lista = "";

        while (indice < limite) {
            let flag = false;
            let num = indice.toString().split("");

            for (let index = 0; index < num.length; index++) {
                if (num[index] == "1") {
                    if (!flag) {
                        lista += indice + " ";
                        flag = true;
                    }
                    contador++;
                }
            }
            indice++;
        }

        document.getElementById("res-3").innerText = "Qtd: " + contador + "\n";
        document.getElementById("res-3-2").innerText = lista;
    }

    voltarMenu() {
        document.getElementById("menu-op").value = "";
        document.querySelector(".menu").classList.remove("opcao");
        document.getElementById("opcao1").classList.remove("mostrar");
        document.getElementById("opcao2").classList.remove("mostrar");
        document.getElementById("opcao3").classList.remove("mostrar");
        document.getElementById("opcao4").classList.remove("mostrar");
    }
}

let menu = new Menu();