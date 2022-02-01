const sequelize = require('./db_connection')
const User = require('./User')
const WG = require('./WG')

User.hasOne(WG);
WG.belongsTo(User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE', 
    as: 'admin', 
    foreignKey: 'adminID'
});