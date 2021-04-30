const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class User extends Model {}
User.init({
    firstname: {
        type: DataTypes.STRING,
        allowNull:false
    },

    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    
}, {
    sequelize, modelName: "user"
});

module.exports = User
