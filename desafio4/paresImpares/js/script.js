class GerenciadorArray{

    constructor(){
        this.meuArray = [1,2,3,4,5,6,7,8,9,10];
    }

    imprimirPares(){

        let strArray = "";

        for(let i = 0; i < this.meuArray.length; i++){
            if( this.meuArray[i] % 2 == 0)
                strArray  += this.meuArray[i] + " ";
        }
        document.getElementById("resultado").innerText = strArray;
    }

    imprimirImpares(){

        let strArray = "";

        for(let i = 0; i < this.meuArray.length; i++){
            if( this.meuArray[i] % 2 != 0)
                strArray  += this.meuArray[i] + " ";
        }
        document.getElementById("resultado").innerText = strArray;
    }
}

let gerente = new GerenciadorArray();