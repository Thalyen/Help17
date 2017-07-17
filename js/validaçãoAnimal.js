function enviardados(){
 
if(document.dados.nome.value=="" || document.dados.nome.value.length > 30)
{
alert( "Preencha campo corretamente!" );
document.dados.nome.focus();
return false;
}
  
if (document.dados.raca.value=="Raça")
{
alert( "Escolha uma opção para o campo raça!" );
document.dados.raca.focus();
return false;
}
if (document.dados.especie.value=="Espécie")
{
alert( "Escolha uma opção para o campo espécie!" );
document.dados.especie.focus();
return false;
}
if (document.dados.idade.value=="Idade")
{
alert( "Escolha uma opção para o campo idade!" );
document.dados.idade.focus();
return false;
}
if (document.dados.sexo.value=="Sexo")
{
alert( "Escolha uma opção para o campo sexo!" );
document.dados.idade.focus();
return false;
}
if (document.dados.descricao.value=="")
{
alert( "Preencha a descrição do animal!" );
document.dados.descricao.focus();
return false;
}
 
alert("Obrigada, seu animal foi cadastrado!"); 
return true;
}
