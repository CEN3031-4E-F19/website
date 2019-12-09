var client = require('../controllers/client.server.controller.js')
    Article = require('../models/article.server.model')
    //User = require('../models/user.server.model')
    user = require('../controllers/user.server.controller')
    mongoose = require('mongoose')
    express = require('express')
    articleController = require('../controllers/article.server.controller')
    passport = require('passport')
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

  client.save((err) => {
    if (err) {
      throw err;
    } else {
      return res.json({ success: true });
    }
  })
})

router.get('/articleScrape', articleController.updateDatabase);

router.get('/getArticles',articleController.getAllArticles);

router.delete('/clients/:clientId',client.delete);
router.get('/clients/:clientId',client.findOne);
router.get('/clients/',client.findAll);

router.get('/users/',user.findAll);
//login handle
router.post('/users/login', passport.authenticate('local'), (req,res)=> {
  console.log("This is req.user from /login: " + JSON.stringify(req.user));
  console.log(
    "This is req.session from /login: " + JSON.stringify(req.session)
  );
  req.session.userId = req.user._id;
  res.locals.user = req.user;
  res.locals.session = req.session;
  const client = {
    id: req.user._id,
    username: req.user.username
  };

  return res.send({
    success: true,
    message: "successful login",
    user: req.user
  });
})

module.exports = router;
