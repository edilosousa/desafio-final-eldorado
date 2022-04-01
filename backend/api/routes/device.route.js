module.exports = app => {
    const devices = require("../controllers/device.controller");
  
    var router = require("express").Router();
  
    // Rota para Criar um novo agenda
    router.post("/", devices.create);
  
    app.use('/api/device', router);
  };