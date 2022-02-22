const sequelize = require('./db_connection');
const {
    DataTypes,
    Model
} = require('sequelize');

class PurchasedItem extends Model { }
PurchasedItem.init({
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    note: {
        type: DataTypes.STRING
    }

}, {
    sequelize,
    paranoid: true
});


module.exports = PurchasedItem;