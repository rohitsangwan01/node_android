let express = require('express')
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
let formidableMiddleware = require('express-formidable');
var sourceFile = require('./config');
const mongo = require('./db.js');


//MongoDb Connection
mongo.connectToServer( function( err) {
  if (err) console.log(err);

  // Initialize the app
    let app = express();
    var port = process.env.PORT || sourceFile.Port;

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(formidableMiddleware());


    //To get All AppRoutes From api-routes file
    let apiRoutes = require("./api_routes");
    app.use("/",apiRoutes);


  // Launch app to listen to specified port
    app.listen(port, function () {
        console.log("Running on port " + port);
    });

});
