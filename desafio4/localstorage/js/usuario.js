class CadastroUsuario{

    lerUsuario(){
        let usuario = {};

        usuario.nome = document.getElementById("nome").value;
        usuario.username = document.getElementById("username").value;
        usuario.password = document.getElementById("password").value;

        return usuario;
    }

    validarLocalStorage(){
        if (typeof(Storage) !== "undefined") {
            return true;
        } 

        return false;
    }

    salvar(){

        if(!this.validarLocalStorage()){
            window.alert("Esse browser não suporta o uso do Local Storage!");
            return;
        }

        let usuario = this.lerUsuario();
        localStorage.setItem(usuario.username, JSON.stringify(usuario));

        window.alert("Cadastrado com Sucesso!");

        window.location = "localstorage.html";
    }
}

let cadastroUsuario = new CadastroUsuario();