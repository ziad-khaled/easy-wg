const sequelize = require('./db_connection');
const {
    DataTypes,
    Model
} = require('sequelize');

class Announcement extends Model { }
Announcement.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {
    sequelize,
});

module.exports = Announcement;