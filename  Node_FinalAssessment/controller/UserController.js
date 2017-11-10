//Import required module
var User = require('../models/user');
var express = require('express'); 
var router = express.Router(); 
//module.exports = router;


// export the postUser method
exports.postUser = function(req, res){
  // creating the new user
  var usr = new User({
    name:         req.body.name,
    password:     req.body.password,
    emailId:      req.body.email,
    mobileNumber: req.body.mobile
    
  });

  //save the creating user
  usr.save(function(error,response){
    // handle the error
      if(error){
        return error;
      }
      else{
        //send the response to the browser
        res.json({
          success: true,
          body: response
        });
      }
  }); // end of save method
} 

exports.getUser = function (req, res) {
    User.find({}, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}
