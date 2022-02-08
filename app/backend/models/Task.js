const sequelize = require('./db_connection');
const {
    DataTypes,
    Model
} = require('sequelize');

class Task extends Model { }
Task.init({
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    sequelize,
    paranoid: true
});


module.exports = Task;