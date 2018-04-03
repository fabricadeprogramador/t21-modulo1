var lista = "";

class ListaConvidados{

    adicionar(){
        let elementoInput = document.getElementById("inputConvidado");
        let nomeConvidado = elementoInput.value;

        let lista = document.querySelector(".lista");

        let itemLista = document.createElement("div");
        let span = document.createElement("span");
        let imagem = document.createElement("img");

        span.innerText = nomeConvidado;
        imagem.src = "img/garbage.svg";
    }
}

var listaConvidados  = new ListaConvidados();