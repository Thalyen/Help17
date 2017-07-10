function cadastrarUsuario() {
    var xhttp = new XMLHttpRequest();

    var usuario = {};
    usuario.tipo = document.getElementById("tipo").value;
    usuario.nome = document.getElementById("nome").value;
    usuario.email = document.getElementById("email").value;
    usuario.senha = document.getElementById("senha").value;

    var cadastrado = JSON.stringify(usuario);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("POST", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/usuario", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}

function editarUsuario() {
    var xhttp = new XMLHttpRequest();

    var usuario = {};
    usuario.tipo = document.getElementById("tipo").value;
    usuario.nome = document.getElementById("nome").value;
    usuario.email = document.getElementById("email").value;
    usuario.senha = document.getElementById("senha").value;

    var cadastrado = JSON.stringify(usuario);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("PUT", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/usuario", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}

function logar() {
    var xhttp = new XMLHttpRequest();

    var login = {};
    login.email = document.getElementById("email").value;
    login.senha = document.getElementById("senha").value;

    var cadastrado = JSON.stringify(login);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("POST", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/logar", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}