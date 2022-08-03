const Users = require("../../models/Users");

class Usuario {
    async cadastrarUsuario(req, res) {
        const login = req.body.login
        const senha = req.body.senha
        const confirm = req.body.confirm

        let admin = req.body.admin

        if(admin == null) { admin = false }

        const user = await Users.findAll({
            where: {
                login: login,
            }
        })
       
        if(user.length == 0 && senha == confirm) {
            Users.create({
                login: login,
                senha: senha,
                admin: admin
            }).then(function() {
                res.redirect("/")
            }).catch(function() {
                res.send("Houve um erro");
            })
        } else {
            res.redirect("/user")
        }
    }

    async acessarSistema(req, res) {
        const login = req.body.login;
        const senha = req.body.senha;
    
        const user = await Users.findAll({
            where: {
                login: login,
                senha: senha
            }
        })

        if(user.length == 0) {
            res.redirect("/")
        } else {
            res.redirect("/veiculos")
        }
    }

    async alterarSenha(req, res) {
        const login = req.body.login;
        const senha = req.body.senha;
        const confirm = req.body.confirm;

        if(senha == confirm) {
            Users.update({
                senha: req.body.senha
            }, { where: {
                login: login
            }})

            res.redirect("/")
        } else {
            res.redirect("/usuario/atualizar")
        }
    }
}

module.exports = Usuario;

