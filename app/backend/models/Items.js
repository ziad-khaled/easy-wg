const sequelize = require('./db_connection');
const {
    DataTypes,
    Model
} = require('sequelize');

class Items extends Model { }
Items.init({
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

}, {
    sequelize,
});


module.exports = Items;