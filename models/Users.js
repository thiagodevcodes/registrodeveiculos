const db = require("./db");

const Users = db.sequelize.define("usuarios", {
    login: {
        type: db.Sequelize.STRING
    },

    senha: {
        type: db.Sequelize.STRING
    }
});

//Users.sync({force: true});

module.exports = Users;