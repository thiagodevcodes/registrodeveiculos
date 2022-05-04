const Post = require("../models/Post.js");
const History = require("../models/History.js");


class Veiculo {
    cadastrarVeiculo(req, res) {
        const date = new Date();
        Post.create({
            nome: req.body.nome,
            marca: req.body.marca,
            modelo: req.body.modelo,
            placa: req.body.placa,
            data: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
            horaEntrada: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        }).then(function() {
            History.create({
                nome: req.body.nome,
                marca: req.body.marca,
                modelo: req.body.modelo,
                placa: req.body.placa,
                data: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
                horaEntrada: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
            }).then(function() {
                res.redirect("/home")
            }).catch(function() {
                res.send("Houve um erro");
            });
        }).catch(function() {
            res.send("Houve um erro");
        });
    }

    removerVeiculo(req, res) {
        const date = new Date();
        Post.destroy({where: {"id": req.params.id}})
        .then(function() {
            History.update({horaSaida: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}, {
                where: {
                    id: req.params.id
                }
            }).then(function() {
                res.redirect("/home")
            }).catch(function() {
                res.send("Not Found")
            })
        }).catch(function(erro) {
            res.send("Not Found")
        })
    }
}

module.exports = Veiculo;