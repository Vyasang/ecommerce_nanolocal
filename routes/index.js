var express = require('express');
var router = express.Router();

var isAuthenticated = function(req, res, next) {
  // if user is authenticated in the session, call the next() to call the next request handler 
  // Passport adds this method to request object. A middleware is allowed to add properties to
  // request and response objects
  if (req.isAuthenticated())
    return next();
  // if the user is not authenticated then redirect him to the login page
  res.redirect('/');
}

module.exports = function(passport) {

  //All users other than vendors
  router.get('/', function(req, res) {
    if (req.isAuthenticated()) {
      //if user is already authenticated, redirect to home
      res.redirect('/home');
    } else {
      // Display the Login page with any flash message, if any
      res.render('login', {
        message: req.flash('message')
      });
    }
  });

  //Vendor specific login page
  router.get('/vendor', function(req, res) {
    if (req.isAuthenticated()) {
      //if user is already authenticated, redirect to home
      res.redirect('/home');
    } else {
      // Display the Login page with any flash message, if any
      res.render('vendorlogin', {
        message: req.flash('message')
      });
    }
  });

  //Authenticate user using 'login' (Local strategy)
  /*router.post('/login', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true
  }));*/

  router.post('/login', function(req, res, next) {
    console.log("********* Hey there ******** ");
    req.usrrole = undefined;
    passport.authenticate('login', {
      successRedirect: '/home',
      failureRedirect: '/',
      failureFlash: true
    })(req, res, next);
  });

  router.post('/vdrlogin', function(req, res, next) {
    req.usrrole = 'vendor';
    passport.authenticate('login', {
      successRedirect: '/home',
      failureRedirect: '/vendor',
      failureFlash: true
    })(req, res, next);
  });

  //Register new user
  router.get('/signup', function(req, res) {
    res.render('register', {
      message: req.flash('message')
    });
  });

  /* Handle Registration POST */
  router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/home',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  //Home page, where all authenticated user lands 
  router.get('/home', isAuthenticated, function(req, res) {
    res.render('home', {
      user: req.user
    });
  });

  router.get('/addproduct', isAuthenticated, function(req, res) {
    res.render('addproduct', {
      user: req.user
    });
  });

  //User is checking out of the session
  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  return router;
}