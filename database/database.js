const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'admin', 'admin',{
    host: 'DESKTOP-HSNK74S',
    dialect: 'mssql'
});

module.exports = connection;