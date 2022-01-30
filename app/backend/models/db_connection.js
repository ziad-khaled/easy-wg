const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("easy_wg_db", "db_admin", "Barstool-Brilliant-Caucus-Trousers-Buckwheat0-Village-Harddisk", {
  host: "172.104.244.126",
  port: 3306,
  dialect: "mysql",
});

const connectToDB = async () => {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');

  // check the current the state of the database tables and alter the tables accordingly, see the model synchronization section in https://sequelize.org/master/manual/model-basics.html
  await sequelize.sync({ alter: true});
  console.log("All models were synchronized successfully.");
}


try {
  connectToDB();
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
