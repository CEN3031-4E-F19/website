var mongoose = require('mongoose')
    Article = require('../models/article.server.model')
    cheerio = require('cheerio')
    axios = require('axios')

    async function scraperPacific(callback){
        for(var i = 1; i<5; i++){
          const pacInstUrl = 'https://pacinst.org/media-news/page/'+i;
          let body = await axios.get(pacInstUrl);
          var $ = cheerio.load(body.data);
            $('div.excerpt-wrap').each(function(i,element){
              var article = new Article();
            
              //title
              article.title=$(this).find('.default-ex-title').text();
              //description
              article.description = $(this).find('.entry-summary').text().trim();
              //link
              article.link=$(this).find('.news-ex-link').find('a').attr('href');
              
              article.save(err=>{
                if(err) console.log(err);
              })
              
            });
        }
        callback();
      }

      async function scraperUnWater(callback){
        for(var i = 1; i<5; i++){
          const unUrl = 'https://www.unwater.org/news/un-water-news/page/'+i;
          let body = await axios.get(unUrl);
          var $ = cheerio.load(body.data);
            $('article.news-item').each(function(i,element){
              var article = new Article();
              //title
              article.title=$(this).find('h3').find('a').text();
              //description
              article.description = $(this).find('p').clone().children().remove().end().text();
              //link
              article.link=$(this).find('h3').find('a').attr('href');
              
              article.save(err=>{
                if(err) console.log(err);
              })
            
            });
        }
        callback();
      }






    
    exports.updateDatabase= function(req,res){
        scraperPacific();
        scraperUnWater();
        res.send("Filling Database");
    }

    exports.getAllArticles=function(req,res){
        Article.find({},(err,articles)=>{
            res.send(articles)
        })
    }