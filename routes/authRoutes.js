const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //back with the code from google
  //now exchange code for actual user profile
  app.get('/auth/google/callback', passport.authenticate('google'));
};
