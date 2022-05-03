const {validarRota} = require('../controllers/login.controller') 
module.exports = app => {
    const category = require("../controllers/category.controller");
  
    var router = require("express").Router();
  
    //ROTA PARA ADICIONAR NOVA CATEGORY
    router.post("/add", validarRota, category.create);
    //ROTA PARA ENCONTRAR APENAS UM REGISTRO
    router.get("/:id", validarRota, category.findOne);
    //ROTA PARA RETORNAR TODOS OS REGISTROS
    router.get("/", validarRota, category.findAll);
    //ROTA PARA ALTERAR UM REGISTRO
    router.put("/:id", validarRota, category.update);
    //ROTA PARA DELETAR REGISTRO
    router.delete("/:id", validarRota, category.delete);
    //ROTA PADRÃO DE CATEGORY
    app.use('/api/category', router);
  };