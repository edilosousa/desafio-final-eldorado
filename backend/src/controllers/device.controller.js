const db = require('../models');
const Device = db.device;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');

//CRIAR NOVA DEVICE
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
//BUSCAR UM REGISTRO
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
//BUSCAR TODOS OS REGISTROS OU FILTRAR POR NOME
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
//ALTERAR UM REGISTRO
exports.update = (req, res) => {
    const id = req.params.id;

    Device.update(req.body, {
        where: { DEV_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Dispositivo Alterado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não pode alterar o Dispositivo com o id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erro alterar o Dispositivo com o id=" + id
            });
        });
};
//DELETAR UM REGISTRO
exports.delete = (req, res) => {
    const id = req.params.id;

    Device.destroy({
        where: { DEV_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Device deletado com sucesso"
                });
            } else {
                res.send({
                    message: `Não foi possivel delatar o Device com o id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Não é possivel deletar o Device com o id=" + id
            });
        });
};