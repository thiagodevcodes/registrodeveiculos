const Sequelize = require("sequelize");

const sequelize = new Sequelize("sistemadecadastro", "thiago", "34616096", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}