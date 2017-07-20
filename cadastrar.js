function cadastrarAnuncio() {
   // var user = JSON.parse(localStorage.getItem('usuario'));

    $.ajax({
        type: "POST",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/anuncio",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            titulo: $("#titulo").val()
            //descricao: $("#descricao").val()
           // foto: $("#foto").val()
           // data: "07/2017",
           // idUsuario: user.id
        }),
        success: function () {
            alert("Cadastrado com sucesso");
            //window.location.href = "Listagem_Anuncio.html";
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event
            
        }
    });
}

function editarAnuncio() {
    $.ajax({
        type: "PUT",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/anuncio",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            nome: $("#nomeAnuncio").val(),
            descricao: $("#descricao").val(),
            localzacao: $("#bairro").val() + ", " + $("#cidade").val() + ", " + $("#estado").val(),
            foto: $("#foto").val(),
            data: "07/2017"
        }),
        success: function () {
            alert("Cadastrado com sucesso");
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event
            window.location.href = "Listagem_Anuncio.html";
        }
    });
}

function editarDenuncia() {
    $.ajax({
        type: "PUT",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/denuncia",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            titulo: $("#titulo").val(),
            tipo: $("#tipo").val(),
            descricao: $("#descricao").val(),
            localzacao: $("#bairro").val() + ", " + $("#cidade").val() + ", " + $("#estado").val(),
            foto: $("#foto").val(),
            data: "07/2017"
        }),
        success: function () {
            alert("Cadastrado com sucesso");
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event
            window.location.href = "Listagem_Denuncia.html";
        }
    });
}

function cadastrarDenuncia() {
    $.ajax({
        type: "POST",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/denuncia",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            titulo: $("#titulod").val(),
            tipo: $("#tipo").val(),
            descricao: $("#descricao").val(),
            localzacao: $("#bairro").val() + ", " + $("#cidade").val() + ", " + $("#estado").val(),
            foto: $("#foto").val(),
            data: "07/2017"
        }),
        success: function () {
            alert("Cadastrado com sucesso");
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event
            window.location.href = "Listagem_Denuncia.html";
        }
    });
}

function cadastrarAnimal() {
    $.ajax({
        type: "POST",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/animal",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
            nome: $("#nome").val(),
            raca: $("#raca").val(),
            especie: $("#especie").val(),
            sexo: $("#sexo").val(),
            idade: $("#idade").val(),
            foto: $("#foto").val(),
            descricao: $("#descricao").val()
        }),
        success: function () {
            alert("Cadastrado com sucesso");
            window.location.href = "Listagem_Animal.html";
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event

        }
    });
}

function editarAnimal() {
    $.ajax({
        type: "PUT",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/animal",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            nome: $("#nome").val(),
            raca: $("#raca").val(),
            especie: $("#especie").val(),
            sexo: $("#sexo").val(),
            idade: $("#idade").val(),
            foto: $("#foto").val(),
            descricao: $("#descricao").val(),
            data: "07/2017"
        }),
        success: function () {
            alert("Cadastrado com sucesso");
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event
            window.location.href = "Listagem_Animal.html";
        }
    });
}

function cadastrarEventos() {
    //  var user = JSON.parse(localStorage.getItem('usuario'));

    $.ajax({
        type: "POST",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/evento",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            nome: $("#nome").val(),
            localzacao: $("#rua").val() + ", " + $("#bairro").val() + ", " + $("#cidade").val() + ", " + $("#estado").val(),
            complemento: $("#complemento").val(),
            foto: $("#foto").val(),
            descricao: $("#descricao").val()
                    //data: "20/07/2017",
                    //horario: "10:00"
                    //responsavel: user.id
        }),
        success: function () {
            alert("Cadastrado com sucesso");
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event
            window.location.href = "Listagem_Eventos.html";
        }
    });
}

function editarEventos() {
    $.ajax({
        type: "PUT",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/evento",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            nome: $("#nome").val(),
            localzacao: $("#rua").val() + ", " + $("#bairro").val() + ", " + $("#cidade").val() + ", " + $("#estado").val(),
            complemento: $("#complemento").val(),
            foto: $("#foto").val(),
            descricao: $("#descricao").val(),
            data: $("#data").val(),
            horario: $("#horario").val()
        }),
        success: function () {
            alert("Cadastrado com sucesso");
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event
            window.location.href = "Listagem_Eventos.html";
        }
    });
}

function editarEncontro() {
    $.ajax({
        type: "PUT",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/encontro",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            nome: $("#nome").val(),
            localzacao: $("#rua").val() + ", " + $("#bairro").val() + ", " + $("#cidade").val() + ", " + $("#estado").val(),
            complemento: $("#complemento").val(),
            data: $("#data").val(),
            horario: $("#horario").val()
        }),
        success: function () {
            alert("Cadastrado com sucesso");
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event
            window.location.href = "Listagem_Animal.html";
        }
    });
}

function cadastrarEncontro() {
    $.ajax({
        type: "POST",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/encontro",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            nome: $("#nome").val(),
            localzacao: $("#rua").val() + ", " + $("#bairro").val() + ", " + $("#cidade").val() + ", " + $("#estado").val(),
            complemento: $("#complemento").val(),
            data: $("#data").val(),
            horario: $("#horario").val()
        }),
        success: function () {
            alert("Cadastrado com sucesso");
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event
            window.location.href = "Listagem_Animal.html";
        }
    });
}

function cadastrarExperiencia() {
    //var user = JSON.parse(localStorage.getItem('usuario'));

    $.ajax({
        type: "POST",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/experiencia",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
            titulo: $("#titulo").val(),
            categoria: $("#categoria"),
            foto: $("#foto").val(),
            descricao: $("#descricao").val(),
            responsavel: 6
        }),
        success: function () {
            alert("Cadastrado com sucesso");
            window.location.href = "Experiencias.html";
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event

        }
    });
}

function editarExperiencia() {
    $.ajax({
        type: "PUT",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/experiencia",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            titulo: $("#titulo").val(),
            categoria: $("#categoria"),
            foto: $("#foto").val(),
            descricao: $("#descricao").val()
        }),
        success: function () {
            alert("Cadastrado com sucesso");
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event
            window.location.href = "Listagem_Experiencia.html";
        }
    });
}

function editarEstoque() {
    $.ajax({
        type: "PUT",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/experiencia",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            tipo: $("#tipo").val(),
            necessidade: $("#necessidade"),
            diaria: $("#diaria").val(),
            atual: $("#atual").val()
        }),
        success: function () {
            alert("Cadastrado com sucesso");
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event
            window.location.href = "Listagem_Estoque.html";
        }
    });
}

function cadastrarEstoque() {
    $.ajax({
        type: "POST",
        url: "http://helppettads-appnerd.rhcloud.com/HelpPetMaven/rest/experiencia",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            tipo: $("#tipo").val(),
            necessidade: $("#necessidade"),
            diaria: $("#diaria").val(),
            atual: $("#atual").val()
        }),
        success: function () {
            alert("Cadastrado com sucesso");
        },
        error: function () {
            alert("A ação não pode ser concluída");
        },
        complete: function () {
            // Handle the complete event
            window.location.href = "Listagem_Estoque.html";
        }
    });
}