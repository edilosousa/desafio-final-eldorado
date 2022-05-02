const {validarToken} = require('../controllers/login.controller') 
module.exports = app => {
    const login = require("../controllers/login.controller");
  
    var router = require("express").Router();
  
    
    router.post("/", login.signin);

    // router.get('/teste', login.teste)
    router.get('/teste', validarToken, login.teste)
  
    app.use('/api/login', router);
  };