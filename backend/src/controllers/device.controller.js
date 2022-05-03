const db = require('../models');
const Device = db.device;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');


exports.create = (req, res) => {
    const device = {
        DEV_NAME: req.body.device_name,
        DEV_COLOR: req.body.device_color,
        DEV_PARTNUMBER: req.body.device_partnumber,
        DEV_FK_ID_CATEGORY: req.body.device_fk_id_category
    };
    Device.create(device)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Erro ao criar um novo registro"
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Device.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error ao buscar com o id=" + id
            });
        });
};

exports.findAll = (req, res) => {
    const nome = req.body.device_name;
    var condition = nome ? { DEV_NAME: { [Op.like]: `%${nome}%` } } : null;

    Device.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Erro ao buscar os registro"
            });
        });
};
