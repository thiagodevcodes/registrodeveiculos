const Post = require("../models/Post.js");

class Veiculo {
    cadastrarVeiculo(req, res) {
        const veiculo = Post.create({
            nome: req.body.nome,
            marca: req.body.marca,
            modelo: req.body.modelo,
            placa: req.body.placa,
            data: req.body.data,
            hora: req.body.hora
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