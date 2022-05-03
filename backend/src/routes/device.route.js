const {validarRota} = require('../controllers/login.controller') 
module.exports = app => {
    const devices = require("../controllers/device.controller");
  
    var router = require("express").Router();

    //ROTA PARA ADICIONAR NOVA DEVICE
    router.post("/add", validarRota, devices.create);
    //ROTA PARA ENCONTRAR APENAS UM REGISTRO
    router.get("/:id", validarRota, devices.findOne);
    //ROTA PARA RETORNAR TODOS OS REGISTROS
    router.get("/", validarRota, devices.findAll);
    //ROTA PARA ALTERAR UM REGISTRO
    router.put("/:id", validarRota, devices.update);
    //ROTA PARA DELETAR REGISTRO
    router.delete("/:id", validarRota, devices.delete);
    //ROTA PADRÃO DE DECIVE
    app.use('/api/device', router);
  };

  