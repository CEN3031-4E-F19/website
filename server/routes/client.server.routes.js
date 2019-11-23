var client = require('../controllers/client.server.controller.js')
    express = require('express')
    cheerio = require('cheerio')
    axios = require('axios')
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

router.get('/articleScrape', (req,res)=>{

const pacInstUrl = 'https://pacinst.org/media-news/page/';

axios.get(pacInstUrl)
.then(response=>console.log(response))
.catch(error=>console.log(error))





})
  
module.exports = router;