const sequelize = require('./db_connection');
const {
    DataTypes,
    Model
} = require('sequelize');

class WG extends Model { }

WG.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalRoomsNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

}, {
    sequelize,
});


module.exports = WG;