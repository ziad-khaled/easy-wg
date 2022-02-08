const sequelize = require('./db_connection')
const User = require('./User')
const WG = require('./WG')
const Announcement = require('./Announcement')
const Purchase = require('./Purchase')
const Task = require('./Task')
const WGRoom = require('./WGRoom')
const PurchaseItem = require('./PurchaseItem')

User.hasOne(WGRoom, {
    as: 'habitant'
})
WGRoom.belongsTo(User)

WG.hasMany(WGRoom, {
    as: 'rooms'
});
WGRoom.belongsTo(WG);


User.hasOne(WG);
WG.belongsTo(User, {
    as: 'admin',
});

User.hasOne(WG);
WG.belongsToMany(User, {
    as: 'members',
    through: 'WGMembers'
});

Purchase.hasMany(PurchaseItem);
PurchaseItem.belongsTo(Purchase);

WG.hasMany(Purchase);
Purchase.belongsTo(WG);

WG.hasMany(Announcement);
Announcement.belongsTo(WG);

WG.hasMany(Task);
Task.belongsTo(WG);

User.hasMany(Announcement);
Announcement.belongsTo(User);

User.hasMany(Purchase);
Purchase.belongsTo(User);

User.hasMany(Task);
Task.belongsTo(User); 