// config/passport.js
/*
This bit of code was taken from the tutorial https://github.com/manjeshpv/node-express-passport-mysql and made to work with our system.
*/
// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);
// expose this function to our app using module.exports
module.exports = function(passport) {



    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        connection.query("SELECT * FROM users WHERE id = ? ",[id], function(err, rows){
            done(err, rows[0]);
        });
    });



    passport.use(
        'local-login',
        new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) { 
            connection.query("SELECT * FROM users WHERE username = ?",[username], function(err, rows){
                if (err)
                    return done(err);
                if (!rows.length) {
                    return done(null, false,console.log('loginMessage', 'No user found.')); // log if username is wrong
                }

                // if the user is found but the password is wrong
                //rows[0].password;
                if (!bcrypt.compareSync(password,rows[0].password)){
                  return done(null, false, console.log('loginMessage', 'Oops! Wrong password.')); // log if the wrong password is entered
                }
                // all is well, return successful user
                return done(null, rows[0]);
            });
        })
    );
};