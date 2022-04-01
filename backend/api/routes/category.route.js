module.exports = app => {
    const devices = require("../controllers/category.controller");
  
    var router = require("express").Router();
  
    // Rota para Criar um novo agenda
    router.get("/", devices.create);
  
    app.use('/api/category', router);
  };