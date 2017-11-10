//import the required modules
var express = require('express');
var router = express.Router();
var userController = require('../controller/UserController');


//api for posting the data of employee
router.route('/user')
    .post(userController.postUser);