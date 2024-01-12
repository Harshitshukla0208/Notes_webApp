const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { connect } = require('./config/database');
const { PORT } = require('./config/serverConfig');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public')); //static files

//templating engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./routes/index'));

app.listen(PORT, async() => {
    console.log(`Server Started on port ${PORT}`);

    await connect();
    console.log("Mongo DB connected");
})