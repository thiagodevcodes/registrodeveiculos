const Post = require("../models/Post.js");
const router = require("express").Router();

router.get("/", (req, res) => {
    Post.findAll({order: [["id", "DESC"]]}).then(function(posts) {
        res.render("home", {
            posts: posts
        })
    }) 
})

router.get("/cadastro", (req, res) => {
    res.render("formulario")
});

router.post("/add", (req, res) => {
    Post.create({
        nome: req.body.nome,
        marca: req.body.marca,
        modelo: req.body.modelo,
        placa: req.body.placa,
        data: req.body.data,
        hora: req.body.hora
    }).then(function() {
        res.redirect("/admin")
    }).catch(function() {
        res.send("Houve um erro");
    })
})

router.get("/deletar/:id", (req, res) => {
    Post.destroy({where: {"id": req.params.id}})
    .then(function() {
        res.redirect("/admin")
    }).catch(function(erro) {
        alert("Erro, cliente não deletado!")
    })
})

module.exports = router;
