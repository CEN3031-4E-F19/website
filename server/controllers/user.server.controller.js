var mongoose = require ('mongoose')
    User = require('../models/user.server.model')

exports.findAll = function(req, res) {
    User.find({}, function(err,user) {
        if (err) {
            console.log(err);
        } else {
            res.send(user);
        }
    })
} 
