const db = require("./db");

const Post = db.sequelize.define("atendimento", {
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

    dataEntrada: {
        type: db.Sequelize.DATEONLY
    },

    horaEntrada: {
        type: db.Sequelize.TIME
    },

    dataSaida: {
        type: db.Sequelize.DATEONLY
    },

    horaSaida: {
        type: db.Sequelize.TIME
    }
});

//Post.sync({force: true});

module.exports = Post;