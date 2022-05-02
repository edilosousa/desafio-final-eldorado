const db = require('../models');
const Login = db.login;
const { QueryTypes } = require('sequelize');
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.signin = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // console.log(email,password)
    // return res.json({email,password})
    const consulta = await db.sequelize.query(
        "SELECT * FROM login "+
        "WHERE LOG_EMAIL = '"+email+"' AND LOG_PASSWORD = '"+password+"'"
        , { type: QueryTypes.SELECT });
        if(consulta.length > 0){
            // console.log(consulta[0]['LOG_ID'])
            const id = consulta[0]['LOG_ID'];
            const token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 600 //segundos 
            });
            return res.json({ auth: true, token: token });
            // return res.status(200).json(consulta)
        }
        return res.status(404).json({"msg":"Usuário inválido"})
};

exports.validarToken = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    const [bearer, token] = authHeader.split(' ');

    if (!token) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Necessário realizar o login para acessar a página!"
        });
    };

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.SECRET);
        // req.userId = decoded.id;

        return next();
    } catch (err) {
        return res.status(401).json({
            erro: true,
            mensagem: "Erro: Necessário realizar o login para acessar a página!"
        });
    }
};

exports.teste = (req,res) => {
    return res.json({"msg":"Validado com sucesso"})
}