module.exports = app => {
    const login = require("../controllers/login.controller");
    var router = require("express").Router();
  
    //Rota de validação de login
    router.post("/", login.signin);
    //Rota para Criar novo usuário
    router.post("/create", login.create);
    //Rota Api padrão de login
    app.use('/api/login', router);
  };