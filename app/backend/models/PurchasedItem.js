const sequelize = require('./db_connection');
const {
    DataTypes,
    Model
} = require('sequelize');

class PurchasedItem extends Model { }
PurchasedItem.init({
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_price: {
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