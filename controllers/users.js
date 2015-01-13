var userModel = require('../models/Users.js');

exports.getUsers= function()// push from server
{
    return userModel;
}
exports.getUser= function(id)
{
    for(var i=0; i<userModel.length; i++)
    {
        if(userModel[i].id==id)
        {
    return userModel.users[i];
        }
    }
}
exports.compareAuth= function(username,password)
{
    for(var i=0; i<userModel.length; i++)
    {
        if(userModel.users[i].username== username && userModel.users[i].password==password)
        {
            return userModel.users[i];
            //return true;            
        }
    }
    return false;
}

exports.postLogin=function(request,response){
    var result= userModel.compareAuth(request.body.email,request.body.password);  
    if(result)
    {
         response.send("Hi "+result.name);
    }
    else
    {
       response.send("Login Failed");
   
    }
}