const db = require('../db.js').getDb()
var helper = require('../helper/helper')
var ObjectId = require('mongodb').ObjectID;

//to Get All Data From MongoDb
exports.get = function(req,res){
    try{
       ///get All Parameters
       db.collection('users').find({}).toArray(function(err, result) {
            if(err) throw err;
            helper.SendSuccessResponse(res,result,'users');
        })
     }catch(err){
        helper.SendErrorResponse(res,err);
     }
}



//to Get All Data From MongoDb
exports.getAll = function(req,res){
    try{
    ///Check If Parameters are Not Provided
    helper.HandleParameters(req);

       ///get All Parameters
        var CollectionName = helper.CollectionNameValue(req);
        var QueryData = helper.QueryDataValue(req);
        var Sort = helper.SortDataValue(req);
        var SetLimit = helper.SetLimitValue(req);

       db.collection(CollectionName).find(QueryData).sort(Sort).limit(SetLimit)
        .toArray((err, result) => {
            if(err) throw err;
            helper.SendSuccessResponse(res,result,CollectionName);
        })
     }catch(err){
        helper.SendErrorResponse(res,err);
     }
}

//to Get Just One Document From MongoDb
exports.getOne = function(req,res){
    try{
    ///Check If Parameters are Not Provided
    helper.HandleParameters(req);

       ///get All Parameters
        var CollectionName = helper.CollectionNameValue(req);
        var QueryData = helper.QueryDataValue(req);

        db.collection(CollectionName).findOne(QueryData, function(err, result) {
            if (err) throw err;
            helper.SendSuccessResponse(res,result,CollectionName);
        });
     }catch(err){
        helper.SendErrorResponse(res,err);
     }
}

//to Get Result by ID
exports.getById =async function(req,res){
    try{
    ///Check If Parameters are Not Provided
    helper.HandleParameters(req);

       ///get All Parameters
        var CollectionName = helper.CollectionNameValue(req);
        var id = helper.idValue(req);

        db.collection(CollectionName).findOne({_id: new ObjectId(id)}, function(err, result) {
            if (err) throw err;
            helper.SendSuccessResponse(res,result,CollectionName);
        });
     }catch(err){
        helper.SendErrorResponse(res,err);
     }
}

