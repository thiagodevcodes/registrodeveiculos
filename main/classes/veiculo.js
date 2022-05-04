const Post = require("../models/Post.js");
const History = require("../models/History.js");

class Veiculo {
    cadastrarVeiculo(req, res) {
        Post.create({
            nome: req.body.nome,
            marca: req.body.marca,
            modelo: req.body.modelo,
            placa: req.body.placa,
            data: req.body.data,
            horaEntrada: req.body.horaentrada
        }).then(function() {
            History.create({
                nome: req.body.nome,
                marca: req.body.marca,
                modelo: req.body.modelo,
                placa: req.body.placa,
                data: req.body.data,
                horaEntrada: req.body.horaentrada
            }).then(function() {
                res.redirect("/home")
            }).catch(function() {
                res.send("Houve um erro");
            });
        }).catch(function() {
            res.send("Houve um erro");
        });
    }

    async finalizarVeiculo(req, res, post) {
        const user = await Post.findAll({
            where: {
                id: req.params.id,
            }
        })
        
        History.update({
            data: req.body.data,
            horaSaida: req.body.horasaida,
        }, 
        { where: {
            id: user[0].id
        }
        }).then(function() {
            Post.destroy({where: {"id": req.params.id}})
            .then(function() {
                res.redirect("/home")
            }).catch(function(erro) {
                res.send("Not Found")
            })
        }).catch(function() {
            res.send("Not Found")
        })
    }

    async alterarVeiculo(req, res) {
        const user = await Post.findAll({
            where: {
                id: req.params.id,
            }
        })
        
        Post.update({
            nome: req.body.nome,
            marca: req.body.marca,
            modelo: req.body.modelo,
            placa: req.body.placa,
            data: req.body.data,
            horaEntrada: req.body.horaentrada,
        }, 
        { where: {
            id: user[0].id
        }
        }).then(function() {
            History.update({
                nome: req.body.nome,
                marca: req.body.marca,
                modelo: req.body.modelo,
                placa: req.body.placa,
                data: req.body.data,
                horaEntrada: req.body.horaentrada,
            }, 
            { where: {
                id: user[0].id
            }
            }).then(function() {
                res.redirect("/home")
            }).catch(function() {
                res.send("Not Found")
            })
        }).catch(function() {
            res.send("Not Found")
        })
    }
}

module.exports = Veiculo;