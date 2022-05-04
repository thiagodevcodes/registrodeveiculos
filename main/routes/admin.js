const Post = require("../models/Post.js");
const router = require("express").Router();
const Usuario = require("../classes/usuario")
const Veiculo = require("../classes/veiculo");
const usuario = new Usuario;
const veiculo = new Veiculo;

//Tela principal

router.get("/home", (req, res) => {
    Post.findAll({order: [["id", "DESC"]]}).then(function(posts) {
        res.render("home", {
            posts: posts
        })
    }) 
})

//Acessar Sistema

router.get("/", (req, res) => {
    res.render("login")
})

router.post("/login", (req, res) => {
    usuario.acessarSistema(req, res)
})

//Cadastro de Usuário

router.get("/user", (req, res) => {
    res.render("caduser")
})

router.post("/caduser", (req,res) => {
    usuario.cadastrarUsuario(req, res)
})

//Entrada Veiculos

router.get("/entrada", (req, res) => {
    res.render("entrada")
});

router.post("/add", (req, res) => {
    veiculo.cadastrarVeiculo(req, res);
})

//Saida Veiculos

router.get("/saida", (req,res) => {
    Post.findAll({order: [["id", "DESC"]]}).then(function(posts) {
        res.render("saida", {
            posts: posts,
        })
    }) 
})

router.post("/finalizar/:id", (req,res) => {
    veiculo.finalizarVeiculo(req,res);
})

router.get("/deletar/:id", (req, res) => {
    veiculo.removerVeiculo(req, res);
})

//Atualizar Veiculos

router.get("/update", (req,res) => {
    Post.findAll({order: [["id", "DESC"]]}).then(function(posts) {
        res.render("update", {
            posts: posts,
        })
        console.log(req.body.nome)
    }) 

})

router.post("/atualizar/:id", (req,res) => {
    veiculo.alterarVeiculo(req,res);
})

module.exports = router;
