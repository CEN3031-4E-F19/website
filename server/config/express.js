const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    router = require('../routes/client.server.routes.js');
    cors = require('cors');


module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    /*
    //adds react production build to serve react requests
    app.use(express.static(path.join(__dirname, "../src")));

    //react root
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../../public/index.html"))
    })
    */
    

    // body parsing middleware
    app.use(bodyParser.json());

    // add a router
    app.use('/api', router);

    const corsOptions = {
        origin: '*'
    }

    app.use(cors(corsOptions));


    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../build', 'index.html'));
        });
    }
    

    return app
}

