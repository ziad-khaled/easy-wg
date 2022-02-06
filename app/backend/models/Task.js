const sequelize = require('./db_connection');
const {
    DataTypes,
    Model
} = require('sequelize');

class Task extends Model { }
Task.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.TINYINT,
        allowNull: flase
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    sequelize,
});


module.exports = Task;