const db = require('../models');
const Category = db.category;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');


exports.create = (req, res) => {
    const category = {
        CAT_NOME: req.body.category_name
    };
    Category.create(category)
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

    Category.findByPk(id)
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
    const nome = req.body.category_name;
    var condition = nome ? { CAT_NOME: { [Op.like]: `%${nome}%` } } : null;

    Category.findAll({ where: condition })
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

exports.update = (req, res) => {
    const id = req.params.id;

    Category.update(req.body, {
        where: { CAT_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Categoria Alterada com sucesso!"
                });
            } else {
                res.send({
                    message: `Não pode alterar a Categoria com o id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erro alterar a Categoria com o id=" + id
            });
        });
};
