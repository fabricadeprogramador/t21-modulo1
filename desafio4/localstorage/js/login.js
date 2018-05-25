class Login {

    lerDados() {
        let usuario = {};

        usuario.username = document.getElementById("inputUsername").value;
        usuario.password = document.getElementById("inputPassword").value;

        return usuario;
    }

    validarLocalStorage() {
        if (typeof (Storage) !== "undefined") {
            return true;
        }

        return false;
    }

    autenticar() {

        if (!this.validarLocalStorage()) {
            window.alert("Esse browser não suporta o uso do Local Storage!");
            return;
        }

        let usuario = this.lerDados();

        let usuarioRetornado = JSON.parse(localStorage.getItem(usuario.username));

        if (usuarioRetornado != undefined) {
            if (usuario.password == usuarioRetornado.password) {
                window.location = "home.html?nome=" + usuarioRetornado.nome;
                return;
            } else {
                window.alert("Usuário ou senha inválido!");
                return;
            }
        }

        window.alert("Usuário não encontrado!");
    }

    carregarNome() {

        let url = decodeURI(window.location.href);

        let pos = url.lastIndexOf("=");

        let nome = (url.slice(pos)).replace("=", "");

        document.getElementById("logado").innerText = nome;
    }
}

let login = new Login();