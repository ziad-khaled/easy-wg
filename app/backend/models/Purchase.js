const sequelize = require('./db_connection');
const {
    DataTypes,
    Model
} = require('sequelize');

class Purchase extends Model { }
Purchase.init({
    receiptPath: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    isSettled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    totalCost: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }

}, {
    sequelize,
    paranoid: true
});


module.exports = Purchase;