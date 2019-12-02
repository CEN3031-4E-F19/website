var client = require('../controllers/client.server.controller.js')
    express = require('express')
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

router.delete('/clients/:clientId',client.delete);
router.get('/clients/:clientId',client.findOne);
router.get('/clients/',client.findAll);
module.exports = router;