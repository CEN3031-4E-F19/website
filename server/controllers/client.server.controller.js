var mongoose = require('mongoose')
    Client = require('../models/client.server.model.js')

exports.create = function(req, res) {
    if (req.body) {
        var client = new Client(req.body);
        client.save(function(err) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.json(client);
                    console.log(client);
                }
            }
        );
    }
}

exports.findAll = function(req, res) {
    Client.find({}, function(err,client) {
        if (err) {
            console.log(err);
        } else {
            res.send(client);
        }
    })
}

exports.findOne = function(req, res) {
    Client.find({_id: req.params.clientId}, function(err, client) {
        if (err) {
            console.log(err);
        } else {
            res.send(client);
        }

    })
}

exports.delete = function(req, res) {
    Client.findOneAndDelete({_id: req.params.clientId}, function (err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            console.log('Deleted');
        }
    });
}