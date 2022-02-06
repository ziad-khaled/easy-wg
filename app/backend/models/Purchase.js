const sequelize = require('./db_connection');
const {
    DataTypes,
    Model
} = require('sequelize');

class Purchase extends Model { }
Purchase.init({
    purchase_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
    type: Sequelize.ENUM,
    values: ['Settled', 'Not settled'],
    allowNull: true
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    receiptPath: {
        type: DataTypes.BINARY,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    }

}, {
    sequelize,
});


module.exports = Purchase;