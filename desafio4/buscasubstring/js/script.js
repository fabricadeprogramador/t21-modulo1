class Substring{

    constructor(){
        this.nomes = ["Jão", "Maria", "Zé", "Pedro", "Paulo", "Paulinho"];
    }

    buscar(){
        let strBusca = document.getElementById("inputSub").value;
        let resultado = "";

        for (let i = 0; i < this.nomes.length; i++) {
            if(this.nomes[i].indexOf(strBusca) != -1){
                resultado += this.nomes[i] + " ";
            }
        }

        document.getElementById("resultado").innerHTML = resultado;
    }
}

let substring =  new Substring();