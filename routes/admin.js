const History = require("../models/Vehicles.js")
const router = require("express").Router();
const Usuario = require("../public/classes/usuario")
const Veiculo = require("../public/classes/veiculo");
const usuario = new Usuario;
const veiculo = new Veiculo;

//Tela principal

router.get("/home", (req, res) => {
    veiculo.mostrarVeiculo(req, res, true)
})

router.get("/registro", async(req, res) => {
    veiculo.mostrarVeiculo(req, res, false)
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
    usuario.cadastrarUsuario(req,res)
})

//Entrada Veiculos

router.get("/entrada", (req, res) => {
    res.render("entrada")
});

router.post("/add", (req, res) => {
    veiculo.cadastrarVeiculo(req, res);
})

//Saida Veiculos

router.get("/remover/:id", (req, res) => {
    veiculo.finalizarVeiculo(req, res)
})

//Update Veiculos 

router.get("/update/:id", async(req, res) => {
    const user = await History.findAll({
        where: {
            id: req.params.id
        }
    })

    res.render("update", {
        id: user[0].id,
        nome: user[0].nome,
        marca: user[0].marca,
        modelo: user[0].modelo,
        placa: user[0].placa
    })
})

router.post("/updated/:id", (req, res) => {
    veiculo.alterarVeiculo(req,res)
})

//Registro Geral


module.exports = router;
