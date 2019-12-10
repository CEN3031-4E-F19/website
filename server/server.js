const express = require('../server/config/express.js')
passport = require('passport')
path = require('path')
const app = express.init()

app.get('/Admin', passport.authenticate('jwt', { session: false }),(req,res)=>{

    req.sendFile(path.join(__dirname+'/client/build/index.html'));
  }
  
);
// Use env port or default
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server now running on port ${port}!`));
