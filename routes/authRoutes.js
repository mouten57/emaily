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

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  //route handler for user
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
