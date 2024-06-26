//models/Usuario.js
const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')

const Usuario = sequelize.define('Usuarios', {
    // Define as informações da tabela colunas

    idUsuarios: {
        type: Sequelize.INTEGER,
        primaryKey: true, // Define essa coluna como a chave primária
        autoIncrement: true // Indica que é uma chave ´rimária autoincrementável
    },

    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    cpf: Sequelize.STRING,
    senha: Sequelize.STRING,
    celular: Sequelize.STRING,
    cep: Sequelize.STRING,
    logradouro: Sequelize.STRING,
    bairro: Sequelize.STRING,
    cidade: Sequelize.STRING,
    estado: Sequelize.STRING,
    imagem: Sequelize.STRING,
    Tipos_Usuarios_idTipos_Usuarios: Sequelize.NUMBER,

},
{
    // Precisa disso pq não tem as colunas createAt e updatedAt no bd
      timestamps: false   // Adiciona colunas createdAt e updatedAt automaticamente
    });

module.exports = Usuario;