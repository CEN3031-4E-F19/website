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
<<<<<<< HEAD

router.delete('/clients/:clientId',client.delete);
router.get('/clients/:clientId',client.findOne);
router.get('/clients/',client.findAll);

router.get('/articleScrape', articleController.updateDatabase);
router.get('/getArticles',articleController.getAllArticles);

=======
  
>>>>>>> parent of 4c63aef... Merge pull request #28 from CEN3031-4E-F19/dev
module.exports = router;