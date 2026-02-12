var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } 
  else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } 
  else {
    usuarioModel
      .autenticar(email, senha)
      .then(function (resultadoAutenticar) {
        if (resultadoAutenticar.length == 1) {

          console.log("TUDO CERTO")
            
        } 
        else if (resultadoAutenticar.length == 0) { 
          usuarioModel
            .autenticar_user(email, senha)
            .then(function (resultadoAutenticar) {
              console.log(
                `\nResultados encontrados: console.log("TUDO CERTO")`
              );
            });
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}


function cadastrar(req, res) {

  var username = req.body.usernameServer;
  var nomeCompleto = req.body.nomeCompletoServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  // Faça as validações dos valores
  if (username == undefined) {
    res.status(400).send("Seu username está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (nomeCompleto == undefined) {
    res.status(400).send("Seu nome completo a vincular está undefined!");
  } else {
    usuarioModel
      .cadastrar(username, email, senha, nomeCompleto)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  autenticar,
  cadastrar
};
