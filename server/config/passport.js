const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = require('../models/user.server.model')
const keys = require('./config');

const opts = {
jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
secretOrKey: keys.db.secretOrKey
}

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if(user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};