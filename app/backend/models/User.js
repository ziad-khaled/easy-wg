const sequelize = require('./db_connection');
const {
    DataTypes,
    Model
} = require('sequelize');

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contactNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        
    }
}, {
    sequelize,
    paranoid: true
});


module.exports = User