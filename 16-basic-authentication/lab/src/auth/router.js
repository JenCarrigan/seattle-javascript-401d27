import express from 'express';
const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';

// Generally, these will send a Token Cookie and do a redirect.
// For now, just spew out the token to prove we're ok.

authRouter.post('/api/signup', (req, res, next) => {
  let user = new User(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.statusCode = 400;
    res.statusMessage = 'Bad Request';
    res.end();
  }
  else {
    user.save()
    .then( (user) => {
      res.send(user.generateToken());
    })
    .catch(next);
  }
});

// note the middleware
authRouter.get('/api/signin', auth, (req, res, next) => {
  //res.cookie('Token', req.token);
  res.send(req.token);
});

export default authRouter;