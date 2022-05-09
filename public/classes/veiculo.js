const Post = require("../../models/Post.js");
const History = require("../../models/History.js");

class Veiculo {
    cadastrarVeiculo(req, res) {
        const date = new Date();
        Post.create({
            nome: req.body.nome,
            marca: req.body.marca,
            modelo: req.body.modelo,
            placa: req.body.placa,
            dataEntrada: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
            horaEntrada: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
        }).then(function() {
            History.create({
                nome: req.body.nome,
                marca: req.body.marca,
                modelo: req.body.modelo,
                placa: req.body.placa,
                dataEntrada: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
                horaEntrada: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
            }).then( () => {
                res.redirect("/home")
            }).catch( () => {
                res.send("Houve um erro");
            });
        }).catch( () => {
            res.send("Houve um erro");
        });
    }

    removerVeiculo(req, res) {
        const date = new Date();
        Post.destroy({where: {"id": req.params.id}})
        .then(function() {
            History.update({
                dataSaida: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
                horaSaida: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
            }, {
                where: {
                    id: req.params.id
                }
            }).then( () => {
                res.redirect("/home")
            }).catch( () => {
                res.send("Not Found")
            })
        }).catch( () => {
            res.send("Not Found")
        })
    }

    alterarVeiculo(req, res) {
        Post.update({
            nome: req.body.nome,
            marca: req.body.marca,
            modelo: req.body.modelo,
            placa: req.body.placa
        }, {
            where: {
                id: req.params.id
            }
        }).then( () => {
            History.update({
                nome: req.body.nome,
                marca: req.body.marca,
                modelo: req.body.modelo,
                placa: req.body.placa
            }, {
                where: {
                    id: 3
                }
            }).then( () => {
                res.redirect("/home")
            }).catch( () => {
                res.send("Not Found")
            })
        }).catch( () => {
            res.send("Not Found")
        })
    }
}

module.exports = Veiculo;