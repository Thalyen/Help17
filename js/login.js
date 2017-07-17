function cadastrarUsuario() {
      $.ajax({
        type: "POST",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/usuario",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            nome: $("#senha").val(),
            email: $("#email").val(),
            senha: $("#senha").val()
        }),
     success: function () {
          alert("Cadastrado com sucesso");
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event
            window.location.href = "../index/index.html";
        }
    });
}

function editarUsuario() {
        $.ajax({
        type: "PUT",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/usuario",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            nome: $("#senha").val(),
            email: $("#email").val(),
            senha: $("#senha").val()
        }),
     success: function () {
            alert("Editado com sucesso");
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event
            window.location.href = "../index/index.html";
        }
    });
}

function logando() {
    $.ajax({
        type: "POST",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/logar",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({email: $("#email").val(), senha: $("#senha").val()}),
     success: function (data) {
           var dados = data;
            dados = JSON.stringify(data);
         localStorage.setItem('usuario', dados);
           window.location.href = "index.html";
        },
        error: function () {
            alert("A ação não pode ser concluída ");
        },
        complete: function () {
            // Handle the complete event
            console.log("logado");
        }
    });
}
