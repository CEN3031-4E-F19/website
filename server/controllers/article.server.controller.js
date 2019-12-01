var mongoose = require('mongoose')
    Article = require('../models/article.server.model')
    cheerio = require('cheerio')
    axios = require('axios')

    async function scraperPacific(callback){
        for(var i = 0; i<4; i++){
          const pacInstUrl = 'https://pacinst.org/media-news/page/'+i;
          let body = await axios.get(pacInstUrl);
          var $ = cheerio.load(body.data);
            $('div.excerpt-wrap').each(function(i,element){
              var article = new Article();
              // data.push({
              //title
              article.title=$(this).find('.default-ex-title').text();
              //description
              article.description = $(this).find('.entry-summary').text().trim();
              //link
              article.link=$(this).find('.news-ex-link').find('a').attr('href');
              
              article.save(err=>{
                if(err) console.log(err);
              })
              // });
            });
        }
        callback();
      }

    
    exports.updateDatabase= function(req,res){
        scraperPacific(()=>{
            res.send("Succesfully Scraped Pacific Institute")
        })
    }

    exports.getAllArticles=function(req,res){
        Article.find({},(err,articles)=>{
            res.send(articles)
        })
    }