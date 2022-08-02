const Users = require("../../models/Users");

class Usuario {
    async cadastrarUsuario(req, res) {
        const login = req.body.login
        const senha = req.body.senha
        const confirm = req.body.confirm
            

        const user = await Users.findAll({
            where: {
                login: login,
            }
        })
    
        console.log(confirm)
    
        if(user.length == 0 && senha == confirm) {
            Users.create({
                login: login,
                senha: senha,
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
        const login = req.body.login
        const senha = req.body.senha
    
        const user = await Users.findAll({
            where: {
                login: login,
                senha: senha
            }
        })
    
        if(user.length == 0) {
            res.redirect("/")
        } else {
            res.redirect("/home")
        }
    }
}

module.exports = Usuario;

