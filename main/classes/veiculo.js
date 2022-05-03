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

    removerVeiculo(req, res) {
        Post.destroy({where: {"id": req.params.id}})
        .then(function() {
            res.redirect("/home")
        }).catch(function(erro) {
            alert("Erro, cliente não deletado!")
        })
    }
}

module.exports = Veiculo;