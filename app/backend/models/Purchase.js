const sequelize = require('./db_connection');
const {
    DataTypes,
    Model
} = require('sequelize');

class Purchase extends Model { }
Purchase.init({
    Purchase_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    receipt: {
        type: DataTypes.BINARY,
        allowNull: true
    },
    time: {
        type: DataTypes.TIME,
        allowNull: true
    }

}, {
    sequelize,
});


module.exports = Purchase;