const sequelize = require('./db_connection');
const {
    DataTypes,
    Model
} = require('sequelize');

class Announcement extends Model { }
Announcement.init({
    message: {
        type: DataTypes.STRING,
        allowNull: false
    }
    

}, {
    sequelize,
});

module.exports = Announcement;