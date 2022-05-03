const db = require('../models');
const Login = db.login;
const { QueryTypes } = require('sequelize');
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const bcrypt = require('bcryptjs')

exports.signin = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    const user = await Login.findOne({ where: {  LOG_EMAIL: email  } });

    // console.log(user.LOG_PASSWORD)
    if(user){
        if (bcrypt.compareSync(password, user.LOG_PASSWORD)) {
            const id = user.LOG_ID;
            const token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 600 //segundos 
            });
            return res.json({ auth: true, token: token });
            // return res.status(200).json(consulta)
        }else{
            return res.status(404).json({"msg":"Usuário inválido"})
        }
    }
    return res.status(404).json({"msg":"Usuário inválido"})        

            // try {
            //      db.sequelize.query(
            //                 "SELECT * FROM login "+
            //                 "WHERE LOG_EMAIL = '"+email+"' AND LOG_PASSWORD = '"+password+"'"
            //                 , { type: QueryTypes.SELECT });
            //                 if(consulta.length > 0){
            //                     if (bcrypt.compareSync(password, senha)) {
            //                         const id = consulta[0]['LOG_ID'];
            //                     const token = jwt.sign({ id }, process.env.SECRET, {
            //                         expiresIn: 600 //segundos 
            //                     });
            //                     return res.json({ auth: true, token: token });
            //                     // return res.status(200).json(consulta)
            //                     }
            //                     return res.status(404).json({"msg":"Usuário inválido 1"})
            //                 }
            //                 return res.status(404).json({"msg":"Usuário inválido 2"})
            // } catch (error) {
            //     return res.status(404).json({"msg":"Usuário inválido 3"})
            // }


        // })
        // .catch(err => {
        //     res.status(500).send({
        //         message:
        //             err.message || "Erro ao buscar os registro"
        //     });
        // });

    
//     const consulta = await db.sequelize.query(
//         "SELECT * FROM login "+
//         "WHERE LOG_EMAIL = '"+email+"' AND LOG_PASSWORD = '"+password+"'"
//         , { type: QueryTypes.SELECT });
//         if(consulta.length > 0){
//             // console.log(consulta[0]['LOG_ID'])
//             const id = consulta[0]['LOG_ID'];
//             const token = jwt.sign({ id }, process.env.SECRET, {
//                 expiresIn: 600 //segundos 
//             });
//             return res.json({ auth: true, token: token });
//             // return res.status(200).json(consulta)
//         }
//         return res.status(404).json({"msg":"Usuário inválido"})
};

exports.validarRota = async(req, res, next) => {
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