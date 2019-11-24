var client = require('../controllers/client.server.controller.js')
    express = require('express')
    cheerio = require('cheerio')
    request = require('request')
   
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
  var data = [];
const pacInstUrl = 'https://pacinst.org/media-news/page/1';

request(pacInstUrl,function(err,response,html){
  if(err) console.log(err);

  var $ = cheerio.load(html);

  $('div.excerpt-wrap').each(function(i,element){
    
    data.push({
    //title
    title:$(this).find('.default-ex-title').text(),
    //description
    desc:$(this).find('.entry-summary').text().trim(),
    //link
    link:$(this).find('.news-ex-link').find('a').attr('href')
    });
  });
  res.send(data);

})





})
  
module.exports = router;