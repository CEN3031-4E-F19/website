var client = require('../controllers/client.server.controller.js')
    Article = require('../models/article.server.model')
    User = require('../models/user.server.model')
    mongoose = require('mongoose')
    express = require('express')
    articleController = require('../controllers/article.server.controller')
    passport = require('passport')
    bcrypt = require('bcryptjs')
    jwt = require('jsonwebtoken')
    keys = require('../config/config')
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
    clientType,
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
  client.clientType = clientType;
  client.clientAddress = clientAddress;
  client.clientZip = clientZip;
  client.problem = problem;
  client.knowProb = knowProb;
  client.clientQuestion = clientQuestion;
  client.problemDesc = problemDesc;
  client.clientCare = clientCare;
  client.clientPay = clientPay;
  client.anotherProb = anotherProb;
  client.waterTesting = waterTesting;
  client.clientType = clientType;

  console.log(client);
  client.save((err) => {
    if (err) {
      throw err;
    } else {
      return res.json({ success: true });
    }
  })
})



router.get('/getArticles',articleController.getAllArticles);

router.delete('/clients/:clientId',client.delete);
router.get('/clients/:clientId',client.findOne);
router.get('/clients/',client.findAll);



router.post("/users/register", (req, res) => {
      console.log(req.body)
      var newUser = new User();
      newUser.username = req.body.username;
      newUser.password = req.body.password;
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    });

//login handle
router.post('/users/login', (req, res)=>{
  const username = req.body.username;
  const password = req.body.password;

  //find user by email
  User.findOne({username}).then(user=>{
    if(!user) {
      return res.status(404).json({usernamenotfound: "Username not found"});
    }

    //check password
    bcrypt.compare(password,user.password).then(isMatch => {
      if(isMatch) {
        //user matched
        //create JWT Payload
        const payload = {
          id: user._id,
          username: user.username
        };

        //sign token
        jwt.sign(
          payload,
          keys.db.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({passwordincorrect: "Password incorrect"});
      }
    });
  });
});

module.exports = router;
