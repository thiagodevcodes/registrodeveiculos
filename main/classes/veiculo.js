const Post = require("../models/Post.js");

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
            res.redirect("/home")
        }).catch(function() {
            res.send("Houve um erro");
        })
    }

    async finalizarVeiculo(req, res) {
        const user = await Post.findAll({
            where: {
                id: req.params.id,
            }
        })
        
        Post.update({
            data: req.body.data,
            horaSaida: req.body.horasaida,
        }, 
        { where: {
            id: user[0].id
        }
        }).then(function() {
            res.redirect("/home")
        }).catch(function() {
            res.send("Not Found")
        })
    }

    removerVeiculo(req, res) {
        Post.destroy({where: {"id": req.params.id}})
        .then(function() {
            res.redirect("/home")
        }).catch(function(erro) {
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
            res.redirect("/home")
        }).catch(function() {
            res.send("Not Found")
        })
    }
}

module.exports = Veiculo;