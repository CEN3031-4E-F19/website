/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema for the data in the listings.json file that will define how data is saved in your database
     See https://mongoosejs.com/docs/guide.html for examples for creating schemas
     See also https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
  */
var clientSchema = new Schema({

  clientName: String,
  clientEmail: String,
  clientAddress: String,
  clientZip: Number,
  clientHouseAge: Number,
  clientQuestion: String,
  clientCare: String,
  clientPay: Number,
  anotherProb: String,
  waterTesting: String
  
});


// clientSchema.pre('save', function(next) {
//     /* your code here */
//     //console.log(this);
//     var currentDate = new Date();
//     if (!this.get('name') | !this.get('code')) {
//       //console.log("code not found");
//       throw err;
//     }
//     else if (this.name && this.code || this.coordinates){
//       if (this.isNew) {
//         this.created_at = this.updated_at = currentDate;
//         //console.log('CREATED NEW');
//       }
//       else {
//         this.updated_at = currentDate;
//         //console.log('UPDATED EXISTING');
//       }
//     }
//
//     next();
//   });


  /* Use your schema to instantiate a Mongoose model */
  //Check out - https://mongoosejs.com/docs/guide.html#models
  var Client = mongoose.model('Client', clientSchema);

  /* Export the model to make it avaiable to other parts of your Node application */
  module.exports = Client;
