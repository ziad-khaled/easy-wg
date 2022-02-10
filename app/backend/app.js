
const express = require('express');
const sequelize = require('./models/db_connection');
const logger = require('morgan');
const index_router = require('./routers/index');
const wgs_router = require('./routers/wgs');
const expensesRouter = require('./routers/expenses')
const port = 3000;

const app = express();
app.use(logger('dev'));
app.use(express.json())
//app.use(cors)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

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


// Use api endpoints here
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', index_router);
app.use('/api/wgs', wgs_router);
app.use('/api/expenses/', expensesRouter);



