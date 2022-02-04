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
    join_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalRoomsNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    memberPrivileges: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    expenditure: {
        type: DataTypes.FLOAT,
        allowNull: true
    }

}, {
    sequelize,
});


module.exports = WG;