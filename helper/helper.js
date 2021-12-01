//Custom Response
exports.SendErrorResponse = function(res,err){
    var Message = err.message == undefined ? err : err.message;
    console.log("Error : "+Message);
    res.json({
        status:'Error',
        code:1401,
        message: Message,
    });
}

exports.SendSuccessResponse = function(res,result,collection){
    try{
        res.json({
            status:'Success',
            code:1400,
            total:result == null ? 0 : result.length,
            message: 'Result From : '+collection,
            data: result == null ? []:result
        });
    }catch(err){
        console.log(err);
        var Message = err.message == undefined ? err : err.message;
        res.json({
            status:'Error',
            code:1401,
            message: Message,
        });
    }
   
}



///Handle All Common Data 
exports.HandleParameters = function(req){
    if(req.fields.collection == null){ throw  'No Collection Name Provided'; }
}
exports.QueryDataValue = function(req){
    try{
        return req.fields.QueryData == null ? {} :  JSON.parse(req.fields.QueryData);
    }catch(e){
        throw e;
    }
}
exports.CollectionNameValue = function(req){
  return  req.fields.collection;
}
exports.SortDataValue = function(req){
    try{
        return req.fields.Sort == null ? {} :  JSON.parse(req.fields.Sort);
    }catch(err){
        throw e;
    }
}
exports.SetLimitValue = function(req){
    return req.fields.limit == null ? 0 : parseInt(req.fields.limit) ;
}
exports.idValue = function(req){
    return req.fields.id == null ? "" : req.fields.id ;
}