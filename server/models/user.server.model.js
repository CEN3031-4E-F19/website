var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;


    var userSchema = new Schema({
        username:String,
        password:String
      });


      var User = mongoose.model('User', userSchema);
  
      /* Export the model to make it avaiable to other parts of your Node application */
      module.exports = User;