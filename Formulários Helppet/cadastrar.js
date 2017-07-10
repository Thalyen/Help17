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
    alert(cadastrado);

    xhttp.onreadystatechange = function() {
     if (this.readyState === 4 && this.status === 200) {
     alert(this.responseText);
     
     }
     };
     xhttp.open("POST", "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/anuncio", true);
     // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xhttp.send(cadastrado);
}