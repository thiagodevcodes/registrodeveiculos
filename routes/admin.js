const Vehicles = require("../models/Vehicles.js")
const router = require("express").Router();
const Usuario = require("../public/classes/usuario")
const Veiculo = require("../public/classes/veiculo");
const usuario = new Usuario;
const veiculo = new Veiculo;

//Sistema
    //ACESSAR - Sistema

    router.post("/home", (req, res) => {
        usuario.acessarSistema(req, res)
    })

    router.get("/", (req, res) => {
        res.render("login")
    })

    router.get("/usuario/cadastro", (req, res) => {
        res.render("caduser")
    })

    router.get("/usuario/atualizar", (req, res) => {
        res.render("upuser")
    })

    router.get("/veiculos/entrada", (req, res) => {
        res.render("entrada")
    });


//Usuário
    //CREATE - Usuário

    router.post("/usuario", (req,res) => {
        usuario.cadastrarUsuario(req,res)
    })

    //UPDATE - Usuário

    router.post("/usuario/atualizado", (req, res) => {
        usuario.alterarSenha(req, res)
    })

//Veiculo
    //CREATE - Veiculo

    router.post("/veiculos", (req, res) => {
        veiculo.cadastrarVeiculo(req, res);
    })

    //READ - Veiculo

    router.get("/veiculos", (req, res) => {
        veiculo.mostrarVeiculo(req, res, true)
    })

    router.get("/veiculos/registros", async(req, res) => {
        veiculo.mostrarVeiculo(req, res, false)
    })

    //FINISH - Veiculo

    router.get("/veiculos/finalizar/:id", (req, res) => {
        veiculo.finalizarVeiculo(req, res)
    })

    //UPDATE - Veiculo

    router.get("/veiculos/editar/:id", async(req, res) => {
        const user = await Vehicles.findAll({
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

    router.post("/veiculos/editar/:id", (req, res) => {
        veiculo.alterarVeiculo(req,res)
    })


module.exports = router;
