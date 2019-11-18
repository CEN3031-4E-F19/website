var client = require('../controllers/client.server.controller.js')
    express = require('express')
    router = express.Router();


router.post('/clientFormSubmit', (req, res) => {
  let client = new Client();
  console.log(req.body);
  const { 
    clientName, 
    clientEmail, 
    clientHouseAge, 
    clientAddress, 
    problem,
    knowProb,
    clientQuestion,
    problemDesc
  } = req.body;

  client.clientName = clientName;
  client.clientEmail = clientEmail;
  client.clientHouseAge = clientHouseAge;
  client.clientAddress = clientAddress;
  client.problem = problem;
  client.knowProb = knowProb;
  client.clientQuestion = clientQuestion;
  client.problemDesc = problemDesc;

  client.save((err) => {
    if (err) {
      throw err;
    } else {
      return res.json({ success: true });
    }
  })
})
  
module.exports = router;