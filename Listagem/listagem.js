function getDenuncia() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.withCredentials = false;

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText);

            /* myObj.forEach(function (o, index) {*/
            var div = document.createElement('div');

            div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";

            div.innerHTML += "<div class='card'><img class='card-img-top' src='img/Eventos.jpg' data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'><div class='card-block'><h4 class='card-title'>" + myObj.localidade + "</h4><div class='card-text'>" + myObj.bairro + "<br/>" + myObj.uf + "</div></div><div class='card-footer'><span class='float-right'>" + myObj.logradouro + "</span></div></div>";/*data*/


            document.getElementById("lista").appendChild(div);
            /*});*/
        }
    };
    var url = "https://viacep.com.br/ws/01001000/json/";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getDenuncias() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText);

            myObj.forEach(function (o, index) {
            var div = document.createElement('div');

            div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";

            div.innerHTML += "<div class='card'><img class='card-img-top' src='img/Eventos.jpg' data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'><div class='card-block'><h4 class='card-title'>" + o.titulo + "</h4><div class='card-text'>" + o.descricao + "<br/>" +o.tipo+ "</div></div><div class='card-footer'><span class='float-right'>" + o.data + "</span></div></div>";/*data*/


            document.getElementById("lista").appendChild(div);
            });
        }
    };
        var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/denuncia";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getAnimais() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj2 = JSON.parse(this.responseText);

            /* myObj.forEach(function (o, index) {*/
            var div = document.createElement('div');

            div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";

            div.innerHTML += "<div class='card'><img class='card-img-top' src='http://cdn.pcwallart.com/images/cute-sleeping-dogs-wallpaper-2.jpg' data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'><div class='card-block'><h4 class='card-title'>" + myObj2.localidade + "</h4><div class='card-text'><div>" + myObj2.logradouro + "</div><div>" + myObj2.bairro + "</div><div>" + myObj2.cep + "</div></div></div><div class='card-footer'>Situação : <span class='label label-primary'>" + myObj2.uf + "</span></div></div>";

            document.getElementById("lista").appendChild(div);
            /*});*/
        }
    };
    var url = "https://viacep.com.br/ws/01125001/json/";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getAnuncios() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj3 = JSON.parse(this.responseText);

            /* myObj.forEach(function (o, index) {*/
            var div = document.createElement('div');

            div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";

            div.innerHTML = "<div class='card'><img data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'  class='card-img-top' src='img/Eventos.jpg'><div class='card-block'><h4 class='card-title'>" + myObj3.logradouro + "</h4><div class='card-text'><div>Descrição: " + myObj3.bairro + "</div></div></div></div>";/* */

            document.getElementById("lista").appendChild(div);
            /*});*/
        }
    };
    var url = "https://viacep.com.br/ws/59032190/json/";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getClinicas() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj4 = JSON.parse(this.responseText);

            /* myObj.forEach(function (o, index) {*/
            var div = document.createElement('div');

            div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";

            div.innerHTML += "<div class='card'><img class='card-img-top' src='img/Eventos.jpg' data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'><div class='card-block'><h4 class='card-title'>" + myObj4.localidade + "</h4><div class='card-text'>Local:<br/>" + myObj4.bairro + "<br/>Descrição:<br/>" + myObj4.localidade + "</div></div></div>";


            document.getElementById("lista").appendChild(div);
            /*});*/
        }
    };
    var url = "https://viacep.com.br/ws/01001000/json/";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getEventos() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj5 = JSON.parse(this.responseText);

            /* myObj.forEach(function (o, index) {*/
            var div = document.createElement('div');

            div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";
            div.innerHTML += "<div class='card'><img class='card-img-top' src='img/Eventos.jpg' data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'><div class='card-block'><h4 class='card-title'>" + myObj5.localidade + "</h4><div class='card-text'><div>Data: " + myObj5.localidade + "</div><div>Local: " + myObj5.localidade + "</div><div>Horário: " + myObj5.localidade + "</div><div>Descrição: " + myObj5.localidade + "</div></div></div><div class='card-footer'>Responsável:" + myObj5.uf + "</div></div>";

            document.getElementById("lista").appendChild(div);
            /*});*/
        }
    };
    var url = "https://viacep.com.br/ws/01001000/json/";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getOngs() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj6 = JSON.parse(this.responseText);

            /* myObj.forEach(function (o, index) {*/
            var div = document.createElement('div');

            div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";
            div.innerHTML += "<div class='card'><img class='card-img-top' src='img/Eventos.jpg' data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'><div class='card-block'><h4 class='card-title'>" + myObj6.localidade + "</h4><div class='card-text'><div>Local: " + myObj6.localidade + "</div><div>Horário de Funcionamento: " + myObj6.localidade + "</div><div>Descrição: " + myObj6.localidade + "</div></div></div></div>";/*<div class='card-footer'>Responsável:" + myObj6.uf + "</div>*/

            document.getElementById("lista").appendChild(div);
            /*});*/
        }
    };
    var url = "https://viacep.com.br/ws/01001000/json/";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getPets() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj6 = JSON.parse(this.responseText);

            /* myObj.forEach(function (o, index) {*/
            var div = document.createElement('div');

            div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";
            div.innerHTML += "<div class='card'><img class='card-img-top' src='img/Eventos.jpg' data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'><div class='card-block'><h4 class='card-title'>" + myObj6.localidade + "</h4><div class='card-text'><div>Local: " + myObj6.localidade + "</div><div>Horário de Funcionamento: " + myObj6.localidade + "</div><div>Descrição: " + myObj6.localidade + "</div></div></div></div>";/*<div class='card-footer'>Responsável:" + myObj6.uf + "</div>*/

            document.getElementById("lista").appendChild(div);
            /*});*/
        }
    };
    var url = "https://viacep.com.br/ws/01001000/json/";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getMinhasAdocoes() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj7 = JSON.parse(this.responseText);

            /* myObj.forEach(function (o, index) {*/
            var tr = document.createElement('tr');

            tr.innerHTML += "<tr><td><img src='http://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png' class='img-circle' width='60'></td><td><h6> <b>" + myObj7.localidade + "</b></h6></td> <td>" + myObj7.uf + "</td><td>" + myObj7.bairro + "</td><td></td><td><button class='btn btn-primary' value='left' type='button'><span class='glyphicon glyphicon-plus'></span> Ver mais</button><button class='btn btn-danger' value='right' type='button'><span class='glyphicon glyphicon-remove'></span> Excluir</button></td> </tr>";

            document.getElementById("lista").appendChild(tr);
            /*});*/
        }
    };
    var url = "https://viacep.com.br/ws/01001000/json/";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getAdocao() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj7 = JSON.parse(this.responseText);

            document.getElementById("status").innerHTML = "Status: " + myObj7.cep;
            document.getElementById("responsavel").innerHTML = "Responsável: " + myObj7.cep;
            document.getElementById("local").innerHTML = "Local: " + myObj7.cep;
            document.getElementById("data").innerHTML = "Data: " + myObj7.cep;
            document.getElementById("hora").innerHTML = "Hora: " + myObj7.cep;

            document.getElementById("adotado").innerHTML = "Animal: " + myObj7.cep;
            document.getElementById("especie").innerHTML = "Espécie: " + myObj7.cep;
            document.getElementById("idade").innerHTML = "Idade: " + myObj7.cep;
            document.getElementById("raca").innerHTML = "Raça: " + myObj7.cep;
            document.getElementById("sexo").innerHTML = "Sexo: " + myObj7.cep;
            document.getElementById("descricao").innerHTML = "Descrição: " + myObj7.cep;
            
             document.getElementById("helper").innerHTML =  myObj7.cep;
            document.getElementById("email").innerHTML = "email: " + myObj7.cep;
        }
    };
    var url = "https://viacep.com.br/ws/01001000/json/";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
      
 function getExperiencias() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj6 = JSON.parse(this.responseText);

            /* myObj.forEach(function (o, index) {*/
            var div = document.createElement('div');

            div.className = "col-md-4";
            div.innerHTML = "<div class='column'><div class='post-module'> <div class='thumbnail'> <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg' class='img-responsive''></div><div class='post-content'> <div class='category'>" + myObj6.localidade + "</div> <h1 class='title' >" +myObj6.localidade + "</h1> <h2 class='sub_title'>Por: " + myObj6.localidade +"</h2><p class='description'>" +  myObj6.localidade + "</p><div class='post-meta'><span class='timestamp'><span class='  glyphicon glyphicon-dashboard'></span><span>  6 mins ago</span></div></div></div></div>";

            document.getElementById("lista").appendChild(div);
            /*});*/
        }
    };
    var url = "https://viacep.com.br/ws/01001000/json/";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
} 
