class ListaConvidados {

    adicionar() {
        let elementoInput = document.getElementById("inputConvidado");
        let nomeConvidado = elementoInput.value;

        if (nomeConvidado != "") {

            let lista = document.querySelector(".lista");

            let itemLista = document.createElement("div");
            let span = document.createElement("span");
            let imagem = document.createElement("img");

            span.innerText = nomeConvidado;
            imagem.src = "img/garbage.svg";
            imagem.setAttribute('onclick', 'listaConvidados.remover()');

            itemLista.classList.add('item-lista');
            itemLista.appendChild(span);
            itemLista.appendChild(imagem);

            lista.appendChild(itemLista);

        }
        elementoInput.value = "";
    }

    remover(){
       window.alert("IMPLEMENTAR!!!"); 
    }
}

var listaConvidados = new ListaConvidados();