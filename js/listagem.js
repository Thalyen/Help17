function getDenuncias() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText);

            myObj.forEach(function (o, index) {
            var div = document.createElement('div');

            div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";

            div.innerHTML += "<div class='card'><img class='card-img-top' src='img/Eventos.jpg' data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'>"+
                    "<div class='card-block'><h4 class='card-title'>" + o.titulo + "</h4><div class='card-text'>" + o.descricao + "<br/>" +o.tipo+ "</div></div>"+
                    "<div class='card-footer'><span class='float-right'>" + o.id + "</span></div></div>";

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

             myObj2.forEach(function (o, index) {
            var div = document.createElement('div');

            div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";

            div.innerHTML += "<div class='card'>"+
                    "<img class='card-img-top' src='http://cdn.pcwallart.com/images/cute-sleeping-dogs-wallpaper-2.jpg' data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'>"+
                    "<div class='card-block'><h4 class='card-title'>" + o.nome + "</h4><div class='card-text'><div>" +
                    o.especie + ":   " + o.raca + "  (" + o.sexo + ")</div><div>" + o.idade + "</div><div>" + o.descricao + "</div><div>" + o.id + "</div>"+
                    "</div></div><div class='card-footer'>Situação : <span class='label label-primary'>" + o.tipo + "</span></div></div>";

            document.getElementById("lista").appendChild(div);
            });
        }
    };
    var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/animal";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getAnuncios() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj3 = JSON.parse(this.responseText);

            myObj3.forEach(function (o, index) {
            var div = document.createElement('div');

            div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";

            div.innerHTML = "<div class='card'>"+
                    "<img data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'  class='card-img-top' src='img/Eventos.jpg'>"+
                    "<div class='card-block'>"+
                    "<h4 class='card-title'>" + o.titulo + "</h4><div class='card-text'><div><strong>Descrição:</strong> <br/>" + o.descricao + "</div></div></div></div>";

            document.getElementById("lista").appendChild(div);
            });
        }
    };
    var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/anuncio";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getClinicas() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj4 = JSON.parse(this.responseText);

             myObj4.forEach(function (o, index) {
            var div = document.createElement('div');

            div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";

            div.innerHTML += "<div class='card'>"+
                    "<img class='card-img-top' src='img/Eventos.jpg' data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'>"+
                    "<div class='card-block'><h4 class='card-title'>" + o.nome + "</h4><div class='card-text'><div><strong>E-mail:</strong><br/> " + o.email + "</div>"+
                    "<div><strong>Horário de Funcionamento:</strong><br/>  8:00 ás 17:00hs</div><div><strong>Descrição:</strong><br/>  Organização sem fins lucrativos</div>"+
                    "</div></div><div class='card-footer'>Responsável:" + o.responsavel + "</div></div>";

            document.getElementById("lista").appendChild(div);
            });
        }
    };
    var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/clinicas";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getEventos() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj5 = JSON.parse(this.responseText);

             myObj5.forEach(function (o, index) {
            var div = document.createElement('div');

            div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";
            div.innerHTML += "<div class='card'>"+
                    "<img class='card-img-top' src='img/Eventos.jpg' data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'>"+
                    "<div class='card-block'><h4 class='card-title'>" + o.nome + "</h4><div class='card-text'><div>Data: " + o.data +  "</div>"+
                    "<div>Local: " + o.localizacao + "</div><div>Horário: " + o.horario + "</div><div>Descrição: " + o.descricao + "</div></div></div>"+
                    "<div class='card-footer'>Responsável:" + o.usuario + "</div></div>";

            document.getElementById("lista").appendChild(div);
            });
        }
    };
    var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/evento";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getOngs() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj6 = JSON.parse(this.responseText);

            myObj6.forEach(function (o, index) {
            var div = document.createElement('div');

            div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";
            div.innerHTML += "<div class='card'><img class='card-img-top' src='img/Eventos.jpg' data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'>"+
                    "<div class='card-block'><h4 class='card-title'>" + o.nome + "</h4><div class='card-text'><div><strong>E-mail:</strong><br/> " + o.email + "</div>"+
                    "<div><strong>Horário de Funcionamento:</strong><br/>  8:00 ás 17:00hs</div><div><strong>Descrição:</strong><br/>  "+ o.descricao +
                    "</div></div></div><div class='card-footer'>Responsável:" + o.responsavel + "</div></div>";

            document.getElementById("lista").appendChild(div);
            });
        }
    };
    var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/ongs";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getPets() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj6 = JSON.parse(this.responseText);

            myObj6.forEach(function (o, index) {
            var div = document.createElement('div');

            div.className = "col-sm-6 col-md-4 col-lg-3 mt-4";
            div.innerHTML += "<div class='card'><img class='card-img-top' src='img/Eventos.jpg' data-toggle='modal' data-target='modal' id='botao2' style='cursor: pointer;'>"+
                    "<div class='card-block'><h4 class='card-title'>" + o.nome + "</h4><div class='card-text'><div><strong>E-mail:</strong><br/> " + o.email + "</div>"+
                    "<div><strong>Horário de Funcionamento:</strong><br/>  8:00 ás 17:00hs</div><div><strong>Descrição:</strong><br/>  "+ o.descricao +
                    "</div></div></div><div class='card-footer'>Responsável:" + o.responsavel + "</div></div>";

            document.getElementById("lista").appendChild(div);
            });
        }
    };
    var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/clinicas";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getMinhasAdocoes() {
    var xmlhttp = new XMLHttpRequest();

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
     var id =sessionStorage.getItem('usuario').id;
     var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/"+id+"/animal";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getAdocao() {
    var xmlhttp = new XMLHttpRequest();

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
            
             document.getElementById("helper").innerHTML =  myObj7.usuario;
            document.getElementById("email").innerHTML = "email: " + myObj7.email;
        }
    };
    
    var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/encontro";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
      
 function getExperiencias() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj8 = JSON.parse(this.responseText);

             myObj8.forEach(function (o, index) {
            var div = document.createElement('div');

            div.className = "col-md-4";
            div.innerHTML = "<div class='column'><div class='post-module'> <div class='thumbnail'>"+
                    "<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg' class='img-responsive''>"+
                    "</div><div class='post-content'> <div class='category'>" + o.categoria + "</div> <h1 class='title' >" +o.titulo + "</h1> <h2 class='sub_title'>Por: " +
                    o.usuario +"</h2><p class='description'>" +  o.descricao + "</p><div class='post-meta'><span class='timestamp'>"+
                    "<span class='  glyphicon glyphicon-dashboard'></span><span>  6 mins ago</span></div></div></div></div>";

            document.getElementById("lista").appendChild(div);
            });
        }
    };
    var url = "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/experiencia/";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
} 
                