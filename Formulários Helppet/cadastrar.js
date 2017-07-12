function cadastrarAnuncio() {
    var xhttp = new XMLHttpRequest();

    var anuncio = {};
    anuncio.nome = document.getElementById("nomeAnuncio").value;
    anuncio.estado = document.getElementById("estado").value;
    anuncio.cidade = document.getElementById("cidade").value;
    anuncio.bairro = document.getElementById("bairro").value;
    anuncio.foto = document.getElementById("foto").value;
    anuncio.descricao = document.getElementById("descricao").value;

    var cadastrado = JSON.stringify(anuncio);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("POST", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/anuncio", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}

function editarAnuncio() {
    var xhttp = new XMLHttpRequest();

    var anuncio = {};
    anuncio.nome = document.getElementById("nomeAnuncio").value;
    anuncio.estado = document.getElementById("estado").value;
    anuncio.cidade = document.getElementById("cidade").value;
    anuncio.bairro = document.getElementById("bairro").value;
    anuncio.foto = document.getElementById("foto").value;
    anuncio.descricao = document.getElementById("descricao").value;

    var cadastrado = JSON.stringify(anuncio);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("PUT", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/anuncio", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}

function cadastrarAnimal() {
    var xhttp = new XMLHttpRequest();

    var animal = {};
    animal.nome = document.getElementById("nome").value;
    animal.raca = document.getElementById("raca").value;
    animal.especie = document.getElementById("especie").value;
    animal.idade = document.getElementById("idade").value;
    animal.sexo = document.getElementById("sexo").value;
    animal.foto = document.getElementById("foto").value;
    animal.descricao = document.getElementById("descricao").value;

    var cadastrado = JSON.stringify(animal);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("POST", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/animal", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}

function editarAnimal() {
    var xhttp = new XMLHttpRequest();

    var animal = {};
    animal.nome = document.getElementById("nome").value;
    animal.raca = document.getElementById("raca").value;
    animal.especie = document.getElementById("especie").value;
    animal.idade = document.getElementById("idade").value;
    animal.sexo = document.getElementById("sexo").value;
    animal.foto = document.getElementById("foto").value;
    animal.descricao = document.getElementById("descricao").value;

    var cadastrado = JSON.stringify(animal);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("PUT", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/animal", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}

function editarDenuncia() {
            var xhttp = new XMLHttpRequest();

            var denuncia = {};
            denuncia.titulo = document.getElementById("titulo").value;
            denuncia.tipo = document.getElementById("tipo").value;
            denuncia.estado = document.getElementById("estado").value;
            denuncia.cidade = document.getElementById("cidade").value;
            denuncia.bairro = document.getElementById("bairro").value;
            denuncia.foto = document.getElementById("foto").value;
            denuncia.descricao = document.getElementById("descricao").value;

            var cadastrado = JSON.stringify(denuncia);

            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    alert(this.responseText);

                }
            };
            xhttp.open("PUT", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/denuncia", true);
            // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(cadastrado);
        }

function cadastrarDenuncia() {
    var xhttp = new XMLHttpRequest();

    var denuncia = {};
    denuncia.tituloDenuncia = document.getElementById("titulo").value;
    denuncia.tipoDenuncia = document.getElementById("tipo").value;
    denuncia.localizacao = document.getElementById("estado").value + document.getElementById("cidade").value + document.getElementById("bairro").value;
    denuncia.fotoDenuncia = document.getElementById("foto").value;
    denuncia.dataDenuncia = new Date().getTime();
    denuncia.descricaoDenuncia = document.getElementById("descricao").value;

    var cadastrado = JSON.stringify(denuncia);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("POST", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/denuncia", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}

function cadastrarEventos() {
    var xhttp = new XMLHttpRequest();

    var evento = {};
    evento.nome = document.getElementById("nome").value;
    evento.data = document.getElementById("horario").value;
    evento.horario = document.getElementById("data").value;
    evento.estado = document.getElementById("estado").value;
    evento.cidade = document.getElementById("cidade").value;
    evento.bairro = document.getElementById("bairro").value;
    evento.rua = document.getElementById("rua").value;
    evento.complemento = document.getElementById("complemento").value;
    evento.foto = document.getElementById("foto").value;
    evento.descricao = document.getElementById("descricao").value;

    var cadastrado = JSON.stringify(evento);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("POST", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/evento", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}

function editarEventos() {
    var xhttp = new XMLHttpRequest();

    var evento = {};
    evento.nome = document.getElementById("nome").value;
    evento.data = document.getElementById("horario").value;
    evento.horario = document.getElementById("data").value;
    evento.estado = document.getElementById("estado").value;
    evento.cidade = document.getElementById("cidade").value;
    evento.bairro = document.getElementById("bairro").value;
    evento.rua = document.getElementById("rua").value;
    evento.complemento = document.getElementById("complemento").value;
    evento.foto = document.getElementById("foto").value;
    evento.descricao = document.getElementById("descricao").value;

    var cadastrado = JSON.stringify(evento);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("PUT", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/evento", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}

function editarEncontro() {
    var xhttp = new XMLHttpRequest();

    var encontro = {};
    encontro.estado = document.getElementById("estado").value;
    encontro.cidade = document.getElementById("cidade").value;
    encontro.bairro = document.getElementById("bairro").value;
    encontro.rua = document.getElementById("rua").value;
    encontro.complemento = document.getElementById("complemento").value;
    encontro.data = document.getElementById("horario").value;

    var cadastrado = JSON.stringify(encontro);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("PUT", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/encontro", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}

function cadastrarEncontro() {
    var xhttp = new XMLHttpRequest();

    var encontro = {};
    encontro.estado = document.getElementById("estado").value;
    encontro.cidade = document.getElementById("cidade").value;
    encontro.bairro = document.getElementById("bairro").value;
    encontro.rua = document.getElementById("rua").value;
    encontro.complemento = document.getElementById("complemento").value;
    encontro.data = document.getElementById("horario").value;

    var cadastrado = JSON.stringify(encontro);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("POST", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/encontro", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}

function cadastrarExperiencia() {
    var xhttp = new XMLHttpRequest();

    var experiencia = {};
    experiencia.titulo = document.getElementById("titulo").value;
    experiencia.categoria = document.getElementById("categoria").value;
    experiencia.foto = document.getElementById("foto").value;
    experiencia.descricao = document.getElementById("descricao").value;

    var cadastrado = JSON.stringify(experiencia);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("POST", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/experiencia", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}

function editarExperiencia() {
    var xhttp = new XMLHttpRequest();

    var experiencia = {};
    experiencia.titulo = document.getElementById("titulo").value;
    experiencia.categoria = document.getElementById("categoria").value;
    experiencia.foto = document.getElementById("foto").value;
    experiencia.descricao = document.getElementById("descricao").value;

    var cadastrado = JSON.stringify(experiencia);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("PUT", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/experiencia", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}

function editarEstoque() {
    var xhttp = new XMLHttpRequest();

    var experiencia = {};
    experiencia.tipo = document.getElementById("tipo").value;
    experiencia.necessidade = document.getElementById("necessidade").value;
    experiencia.diaria = document.getElementById("diaria").value;
    experiencia.atual = document.getElementById("atual").value;

    var cadastrado = JSON.stringify(experiencia);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("PUT", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/estoque", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}

function cadastrarEstoque() {
    var xhttp = new XMLHttpRequest();

    var experiencia = {};
    experiencia.tipo = document.getElementById("tipo").value;
    experiencia.necessidade = document.getElementById("necessidade").value;
    experiencia.diaria = document.getElementById("diaria").value;
    experiencia.atual = document.getElementById("atual").value;

    var cadastrado = JSON.stringify(experiencia);
    alert(cadastrado);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);

        }
    };
    xhttp.open("POST", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/estoque", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(cadastrado);
}