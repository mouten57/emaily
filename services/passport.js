const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      //route user is sent to after they grant permissions to google
      callbackURL: '/auth/google/callback'
    },
    //callback function -> when user gets back home, it brings this accessToken
    //here is our chance to get user info and create new user in our database
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile: ', profile);
    }
  )
);
