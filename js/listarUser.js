function getDenunciasUser() {
    window.location.href = "Listagem_Denuncia.html";
    var xmlhttp = new XMLHttpRequest();
    var data = JSON.parse(localStorage.getItem('usuario'));

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText);

            myObj.forEach(function (o, index) {
                var div = document.createElement('div');

                div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";

                div.innerHTML += "<div class='card'><img class='card-img-top' src='img/Eventos.jpg' data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'>" +
                        "<div class='card-block'><h4 class='card-title'>" + o.titulo + "</h4><div class='card-text'>" + o.descricao + "<br/>" + o.tipo + "</div></div>" +
                        "<div class='card-footer'><span class='float-right'>" + o.id + "</span></div></div>";

                document.getElementById("lista").appendChild(div);
            });
        }
    };

    var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/usuario/" + data.id + "/denuncia";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getAnimaisUser() {
    //   window.location.href = "Listagem_Animal.html";
    var xmlhttp = new XMLHttpRequest();
    var data = JSON.parse(localStorage.getItem('usuario'));

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj2 = JSON.parse(this.responseText);

            myObj2.forEach(function (o, index) {
                var div = document.createElement('div');

                div.className = "col-sm-6";

                div.innerHTML += "<div class='card'>" +
                        "<img src='http://cdn.pcwallart.com/images/cute-sleeping-dogs-wallpaper-2.jpg' width='200px' height='200px' class='img-rounded meusAnimais'  data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'>" +
                        "<div class='card-block'><h4 class='card-title'>" + o.nome + "</h4><div class='card-text'><div>" +
                        o.especie + ":   " + o.raca + "  (" + o.sexo + ")</div><div>" + o.idade + "</div><div>" + o.descricao + "</div><div>" + o.id + "</div>" +
                        "</div></div><div class='card-footer'>Situação : <span class='label label-primary'>" + o.tipo + "</span></div></div>";

                document.getElementById("lista").appendChild(div);
            });
        }
    };

    var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/animal/";//usuario/"+data.id+ "/animal";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getAnunciosUser() {
    var xmlhttp = new XMLHttpRequest();
    var data = JSON.parse(localStorage.getItem('usuario'));

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj3 = JSON.parse(this.responseText);

            myObj3.forEach(function (o, index) {
                var div = document.createElement('div');

                div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";

                div.innerHTML = "<div class='card'>" +
                        "<img data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'  class='card-img-top' src='img/Eventos.jpg'>" +
                        "<div class='card-block'>" +
                        "<h4 class='card-title'>" + o.titulo + "</h4><div class='card-text'><div><strong>Descrição:</strong> <br/>" + o.descricao + "</div></div></div></div>";

                document.getElementById("lista").appendChild(div);
            });
        }
    };

    var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/usuario/" + data.id + "/anuncio";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getEventosUser() {
    var xmlhttp = new XMLHttpRequest();
    var data = JSON.parse(localStorage.getItem('usuario'));

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj5 = JSON.parse(this.responseText);

            myObj5.forEach(function (o, index) {
                var div = document.createElement('div');

                div.className = "col-sm-6 ";
                div.innerHTML += "<div class='card'>" +
                        "<img src='img/Eventos.jpg' width='200px' height='200px' class='img-rounded meusAnimais'  data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'>" +
                        "<div class='card-block'><h4 class='card-title'>" + o.nome + "</h4><div class='card-text'><div>Data: " + o.data + "</div>" +
                        "<div>Local: " + o.localizacao + "</div><div>Horário: " + o.horario + "</div><div>Descrição: " + o.descricao + "</div></div></div>" +
                        "<div class='card-footer'>Responsável:" + o.usuario + "</div></div>";

                document.getElementById("listaev").appendChild(div);
            });
        }
    };

    var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/usuario/";// + data.id + "/evento";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getMinhasAdocoesUser() {
    var xmlhttp = new XMLHttpRequest();
    var data = JSON.parse(localStorage.getItem('usuario'));

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj7 = JSON.parse(this.responseText);

            myObj7.forEach(function (o, index) {
                var tr = document.createElement('tr');

                tr.innerHTML += "<tr><td><img src='http://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png' class='img-circle' width='60'></td><td><h6> <b>" +
                        o.nome + "</b></h6></td> <td>" + o.especie + "</td><td>" + o.raca + "</td><td></td><td>" +
                        "<button class='btn btn-primary' value='left' type='button'><span class='glyphicon glyphicon-plus'></span> " +
                        "Ver mais</button><button class='btn btn-danger' value='right' type='button'><span class='glyphicon glyphicon-remove'></span> Excluir</button></td> </tr>";

                document.getElementById("lista").appendChild(tr);
            });
        }
    };

    var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/usuario/" + data.id + "/animal";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getAdocaoUser() {
    var xmlhttp = new XMLHttpRequest();
    var data = JSON.parse(localStorage.getItem('usuario'));
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj7 = JSON.parse(this.responseText);

            document.getElementById("status").innerHTML = "Status: " + myObj7.stastus;
            document.getElementById("responsavel").innerHTML = "Responsável: " + myObj7.responsavel;
            document.getElementById("local").innerHTML = "Local: " + myObj7.local;
            document.getElementById("data").innerHTML = "Data: " + myObj7.data;
            document.getElementById("hora").innerHTML = "Hora: " + myObj7.hora;

            document.getElementById("adotado").innerHTML = "Animal: " + myObj7.animal;
            document.getElementById("especie").innerHTML = "Espécie: " + myObj7.especie;
            document.getElementById("idade").innerHTML = "Idade: " + myObj7.idade;
            document.getElementById("raca").innerHTML = "Raça: " + myObj7.raca;
            document.getElementById("sexo").innerHTML = "Sexo: " + myObj7.sexo;
            document.getElementById("descricao").innerHTML = "Descrição: " + myObj7.descricao;

            document.getElementById("helper").innerHTML = myObj7.usuario;
            document.getElementById("email").innerHTML = "email: " + myObj7.email;
        }
    };

    var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/usuario/" + data.id + "/encontro";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getExperienciasUser() {
    var xmlhttp = new XMLHttpRequest();
    // var data = JSON.parse(localStorage.getItem('usuario'));

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj8 = JSON.parse(this.responseText);
            var o = myObj8[0];

            document.getElementById("nomeExp").innerHTML = o.titulo;
            document.getElementById("dataExp").innerHTML = o.data;
        }
    };

    var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/usuario/";// + data.id + "/experiencia/";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getPerfilUser() {
    var user = JSON.parse(localStorage.getItem('usuario'));

    document.getElementById("nome").innerHTML = user.nome;
    document.getElementById("email").innerHTML = user.email;
    // document.getElementById("lista").innerHTML = user.nome;
    getAnimaisUser();
    getEventosUser();
    getExperienciasUser();
}