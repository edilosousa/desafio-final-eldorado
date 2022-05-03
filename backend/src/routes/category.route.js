module.exports = app => {
    const category = require("../controllers/category.controller");
  
    var router = require("express").Router();
  
    //ROTA PARA ADICIONAR NOVA CATEGORY
    router.post("/add", category.create);

    router.get("/:id", category.findOne);

    router.get("/", category.findAll);

    router.put("/:id", category.update);

    //ROTA PADRÃO DE CATEGORY
    app.use('/api/category', router);
  };