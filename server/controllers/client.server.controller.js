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