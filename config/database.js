const path = require ('path');
const {Sequelize} = require ('sequlize')

//Banco sqlite local: não exige instalação de servidor de banco de dados.
const sequlize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '...', 'database.sqlite'),
    loggin: false,
});

module.export = Sequelize