const sequelize = require('./db_connection')
const User = require('./User')
const WG = require('./WG')
const Announcement = require('./Announcement')
const Purchase = require('./Purchase')
const Task = require('./Task')

User.hasOne(WG);
WG.belongsTo(User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE', 
    as: 'admin', 
    foreignKey: 'adminID'
});

User.hasOne(Announcement);
Announcement.belongsTo(User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE', 
    as: 'admin', 
    foreignKey: 'adminID'
});

User.hasOne(Purchase);
Purchase.belongsTo(User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE', 
    as: 'admin', 
    foreignKey: 'adminID'
});

User.hasOne(Task);
Task.belongsTo(User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE', 
    as: 'admin', 
    foreignKey: 'adminID'
});