// 1). require express + require mongoose, cors, body parser
const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const routes = require('./routes/routes');

// 2). my middleware + begin listening to the server
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`Server running, port ${3000}`);
})

// 3). DDC, dotenv, database, connection
require('dotenv').config();
//const mongoString  = process.env.DB_URL; I actually don't need this.

const database = mongoose.connection; 
mongoose.connect(process.env.DB_URL);

database.on('error', (error) => {
    console.log(`Issue: ${error}`);
})

database.once('connected', () => {
    console.log('Database On!');
})

// 4). import routes
app.use('/api', routes);

// this is from co-pilot ignore.
/*mongoose.connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})*/