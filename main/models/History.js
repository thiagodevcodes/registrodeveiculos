const db = require("./db");

const History = db.sequelize.define("registro", {
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

    horaEntrada: {
        type: db.Sequelize.TIME
    },

    horaSaida: {
        type: db.Sequelize.TIME
    }
});

//History.sync({force: true});

module.exports = History;