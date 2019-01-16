const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const morgan=require('morgan');
const mongoose=require('mongoose');
const dbConfig = require('./api/database/dburl');

const eventRoutes = require('./api/routes/events');
const eventList = require('./api/routes/eventlist');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// handling cors error 
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header(
        'Access-Control-Allow-Headers',
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});


// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Routes for the requests
app.use('/events',eventRoutes);
app.use('/eventlist',eventList);

// error in request
app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);    
});

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;