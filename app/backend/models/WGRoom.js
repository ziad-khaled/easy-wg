const sequelize = require('./db_connection');
const {
    DataTypes,
    Model
} = require('sequelize');

class WGRoom extends Model { }

WGRoom.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    paranoid: true
});


module.exports = WGRoom;