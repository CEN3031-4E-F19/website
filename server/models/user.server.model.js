var mongoose = require('mongoose'), 
    bcrypt = require('bcrypt.js'),
    Schema = mongoose.Schema;


    var userSchema = new Schema({
        username:String,
        password:String
      });

      userSchema.methods.generateHash = function(password) {
        return bcrypt.hashSync(password,bcrypt.genSaltSync(10),null);
      };

      userSchema.methods.validatePassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };


      var User = mongoose.model('User', userSchema);
  
      /* Export the model to make it avaiable to other parts of your Node application */
      module.exports = User;