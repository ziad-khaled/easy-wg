
const express = require('express');
const { appendFile } = require('fs');
const logger = require('morgan');
const index_router = require('./routers/index');
const port = 3000;

const app = express();
app.use(logger('dev'));
app.use(express.json())
//app.use(cors)



// Use api endpoints here
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', index_router);




app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})