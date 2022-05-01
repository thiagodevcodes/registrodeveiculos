const express = require("express"); 
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post");
const req = require("express/lib/request");
const path = require("path");


//Config
    //Template Engine
    app.engine("handlebars", handlebars.engine({defaultLayout: "main", runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }}));
    app.set("view engine", "handlebars");
    //Body Parser 
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    //Public
    app.use(express.static(path.join(__dirname, "public")))

//Rotas 
    app.get("/", function(req, res) {
        Post.findAll({order: [["id", "DESC"]]}).then(function(posts) {
            res.render("home", {
                posts: posts
            })
        }) 
    })

    app.get("/cadastro", function(req, res) {
        res.render("formulario")
    });

    app.post("/add", function(req,res) {
        Post.create({
            nome: req.body.nome,
            marca: req.body.marca,
            modelo: req.body.modelo,
            placa: req.body.placa,
            data: req.body.data,
            hora: req.body.hora
        }).then(function() {
            res.redirect("/")
        }).catch(function() {
            res.send("Houve um erro: " + erro);
        })
    })

    app.get("/deletar/:id", function(req,res) {
        Post.destroy({where: {"id": req.params.id}})
        .then(function() {
            res.redirect("/")
        }).catch(function(erro) {
            alert("Erro, cliente não deletado!")
        })
    })










app.listen(8081, () => {
    console.log("Servidor iniciado na porta 8081: http://localhost:8081");
});