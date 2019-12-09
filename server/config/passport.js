const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypyt = require("bcryptjs");

const User = require('../models/user.server.model');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (username, password, done) => {
      User.findOne({ username: username })
        .then(user => {
          if (!user) {
            console.log("That email is not registered");
            return done(null, false, {
              message: "That email is not registered"
            });
          }

          //Match password
          bcrypyt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
              return done(null, user);
            } else {
              console.log("Password incorrect");
              return done(null, false, { message: "Password incorrect" });
            }
          });
        })
        .catch(err => console.log(err));
    })
  );
  //Sessions
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};