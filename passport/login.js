var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport) {

  //Mount a LocalStrategy for named login method 'login', can have other strategies with different names, for future extension with other auth providers
  passport.use('login', new LocalStrategy({
      usernameField: 'email', //if we are using email as the username to login instead of default username
      /*passwordField: 'password',*/
      passReqToCallback: true
    },
    function(req, email, password, done) {
      var usrroles = ['customer', 'employee', 'admin'];
      if(req.usrrole !== undefined) {
        usrroles = req.usrrole;
      }

      // check in mongo if a user with email exists or not      
      User.findOne({
          'email': email
          , 'role' : { $in : usrroles }
        },
        function(err, user) {
          // In case of any error, return using the done method
          if (err)
            return done(err);
          // Username does not exist, log the error and redirect back
          if (!user) {
            console.log('User Not Found with email ' + email);
            return done(null, false, req.flash('message', 'Invalid Login attempt or invalid username or crdentials..!'));
          }
          // User exists but wrong password, log the error 
          if (!isValidPassword(user, password)) {
            console.log('Invalid Password');
            return done(null, false, req.flash('message', 'Invalid Login attempt or invalid username or crdentials..!')); // redirect back to login page
          }
          // User and password both match, return user from done method
          // which will be treated like success
          return done(null, user);
        }
      );

    }));

  var isValidPassword = function(user, password) {
    return bCrypt.compareSync(password, user.password);
  }

}