'use strict'

const parser = require('./parser.js');
const router = module.exports = {};
router.routes = {};
const methods = ['GET','PUT','PATCH','POST','DELETE'];

methods.forEach( (method) => {
  router.routes[method] = {};

  router[method.toLowerCase()] = (path,callback) => {
    router.routes[method][path] = callback;
  };
});

router.route = (req,res) => {

  return parser(req).then(req => {
    let handler = router.routes[req.method][req.parsed.pathname];

    if(handler) {
      return handler(req,res);
      
    }
    else {
      res.status(404);
      res.statusMessage = 'Not Found';
      res.write(`Resource not found (${req.parsed.pathname})`);
      res.end();
    }
  })
  .catch ((err) => {
    res.statusCode = 400;
    res.statusMessage = 'Bad Request';
    res.write('Bad Request');
    res.end();
  });
};