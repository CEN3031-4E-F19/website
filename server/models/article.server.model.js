var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

    var articleSchema = new Schema({
        /* Your code for a schema here */ 
        //Check out - https://mongoosejs.com/docs/guide.html
       title:String,
       description:String,
       link:String
      
      });



      var Article = mongoose.model('Article', articleSchema);
  
      /* Export the model to make it avaiable to other parts of your Node application */
      module.exports = Article;