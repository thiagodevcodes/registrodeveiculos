const Vehicles = require("../../models/Vehicles.js");

class Veiculo {
    cadastrarVeiculo(req, res) {
        //CREATE - Veiculo
        const date = new Date();
        Vehicles.create({
            nome: req.body.nome,
            marca: req.body.marca,
            modelo: req.body.modelo,
            placa: req.body.placa,
            situacao: false,
            dataEntrada: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
            horaEntrada: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
        }).then( () => {
            res.redirect("/home")
        }).catch( () => {
            res.send("Houve um erro");
        });
    }

    removerVeiculo(req, res) {
        //REMOVE - Veiculo
        Vehicles.destroy({where: {"id": req.params.id}})
        .then(function() {
            res.redirect("/home")
        }).catch( () => {
            res.send("Not Found")
        })
    }

    finalizarVeiculo(req, res) {
        //FINISH - Veiculo
        const date = new Date();
        Vehicles.update({
            dataSaida: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
            horaSaida: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
            situacao: true
        }, {
            where: {
                id: req.params.id
            }
        }).then( () => {
            res.redirect("/home")
        }).catch( () => {
            res.send("Not Found")
        })
    }

    alterarVeiculo(req, res) {
        //UPDATE - Veiculo
        Vehicles.update({
            nome: req.body.nome,
            marca: req.body.marca,
            modelo: req.body.modelo,
            placa: req.body.placa
        }, {
            where: {
                id: req.params.id
            }
        }).then( () => {
            res.redirect("/home")
        }).catch( () => {
            res.send("Not Found")
        })
    }

    mostrarVeiculo(req, res, sit) {
        //READ - Veiculos
        if(sit == true) {
            Vehicles.findAll({where: {
                situacao: false
            }}, {order: [["id", "DESC"]]}).then(function(posts) {
                res.render("home", {
                    posts: posts
                })
            }) 
            
        } else {
            Vehicles.findAll({
                order: [
                    ["dataSaida", "DESC"], ["horaSaida", "DESC"],
                ],
                where: {
                    situacao: true
                }
            }).then(function(posts) {
                res.render("registro", {
                    posts: posts
                })
            })
        }
    }
}

module.exports = Veiculo;