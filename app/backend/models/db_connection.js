const { Sequelize } = requires("sequelize");

const sequelize = new Sequelize("easy_wg_db", "db_admin", "Barstool-Brilliant-Caucus-Trousers-Buckwheat0-Village-Harddisk", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');

  // check the current the state of the database tables and alter the tables accordingly if test database, see the model synchronization section in https://sequelize.org/master/manual/model-basics.html
  await sequelize.sync({ alter: true, match: /_test$/ }); 
  await sequelize.sync() // In production database just make the table if it doesn't exist else do nothing
  console.log("All models were synchronized successfully.");



} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;