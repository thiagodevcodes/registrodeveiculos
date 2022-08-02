const db = require("./db");

const Vehicles = db.sequelize.define("registro", {
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

    situacao: {
        type: db.Sequelize.BOOLEAN
    },

    dataSaida: {
        type: db.Sequelize.DATEONLY
    },

    horaSaida: {
        type: db.Sequelize.TIME
    }
});

//Vehicles.sync({force: true});

module.exports = Vehicles;