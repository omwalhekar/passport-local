// const User = require("./user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      console.log("strategy");

      if (username === "omkarw3" && password === "1234") {
        return done(null, { username: "omkarw3", password: "1234" });
      } else {
        return done(null, false);
      }
    })
  );

  passport.serializeUser((user, cb) => {
    console.log("serial:", user);
    cb(null, user);
  });

  passport.deserializeUser((user, cb) => {
    console.log("deserialize:", user);
    cb(null, user);
    // User.findOne({ _id: id }, (err, user) => {
    //   const userInformation = {
    //     username: user.username,
    //   };
    //   cb(err, userInformation);
    // });
  });
};
