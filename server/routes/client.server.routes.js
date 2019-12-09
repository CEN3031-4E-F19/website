var client = require('../controllers/client.server.controller.js')
    Article = require('../models/article.server.model')
    mongoose = require('mongoose')
    express = require('express')
    articleController = require('../controllers/article.server.controller')
    router = express.Router();


router.post('/clientFormSubmit', (req, res) => {
  let client = new Client();
  //console.log('client: ', client);
  //console.log('in request handler ', res);
  const {
    clientName,
    clientEmail,
    clientHouseAge,
    clientAddress,
    clientZip,
    problem,
    knowProb,
    clientQuestion,
    problemDesc,
    clientCare,
    clientPay,
    anotherProb,
    waterTesting
  } = req.body;

  client.clientName = clientName;
  client.clientEmail = clientEmail;
  client.clientHouseAge = clientHouseAge;
  client.clientAddress = clientAddress;
  client.problem = problem;
  client.knowProb = knowProb;
  client.clientQuestion = clientQuestion;
  client.problemDesc = problemDesc;
  client.clientCare = clientCare;
  client.clientPay = clientPay;
  client.anotherProb = anotherProb;
  client.waterTesting = waterTesting;
  client.clientZip = clientZip;

  client.save((err) => {
    if (err) {
      throw err;
    } else {
      return res.json({ success: true });
    }
  })
})


router.get('/getArticles',articleController.getAllArticles);

module.exports = router;
