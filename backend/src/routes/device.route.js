module.exports = app => {
    const devices = require("../controllers/device.controller");
  
    var router = require("express").Router();
  
    router.post("/add", devices.create);

    router.get("/:id", devices.findOne);

    router.get("/", devices.findAll);
  
    app.use('/api/device', router);
  };