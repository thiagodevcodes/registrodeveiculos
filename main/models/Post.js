const db = require("./db");

const Post = db.sequelize.define("cadastro", {
    nome: {
        type: db.Sequelize.STRING
    },

    marca: {
        type: db.Sequelize.STRING
    },

    modelo: {
        type: db.Sequelize.STRING
    },

    placa: {
        type: db.Sequelize.STRING
    },

    data: {
        type: db.Sequelize.DATEONLY
    },

    hora: {
        type: db.Sequelize.TIME
    }
});

//Post.sync({force: true});

module.exports = Post;