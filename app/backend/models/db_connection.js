const { Sequelize } = require("sequelize");

module.exports = new Sequelize("easy_wg_db", "root", "Barstool-Brilliant-Caucus-Trousers-Buckwheat0-Village-Harddisk", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
});