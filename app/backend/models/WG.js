const sequelize = require('./db_connection');
const {
    DataTypes,
    Model
} = require('sequelize');

class WG extends Model { }

WG.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        
    },
    totalRoomsNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    paranoid: true
});


module.exports = WG;