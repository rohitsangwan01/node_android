const MongoClient = require("mongodb").MongoClient
var sourceFile = require('./config');

var db;

function connectToServer( callback ) {
    MongoClient.connect(sourceFile.MongoUrl,  { useUnifiedTopology: true , useNewUrlParser: true }, function( err, client ) {
        db  = client.db(sourceFile.DbName);
        return callback( err );
    })
}

function getDb() {
    return db
}

module.exports = {connectToServer, getDb}