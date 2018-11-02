import util from 'util';
import express from 'express';
const router = express.Router();
import atty from '../models/attorneys.js';
import prov from '../models/providers.js';

const models = {
  'attorneys': atty,
  'providers': prov
};

let sendJSON = (res, data) => {
  console.log(data);
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};

router.get('/api/v1/:model', (req, res, next) => {
  if (req.params.model === 'providers') {
    models[req.params.model].find({})
      .populate('atty', 'name')
      .then(data => sendJSON(res, data))
      .catch(next);
  }
  else {
    let edited;
    let attyArr = [];
    models[req.params.model].find({})
      .then(data => {
        data.forEach(obj => {
          //edited = obj;
          prov.find({ atty: obj._id })
            .then(data => {
              //console.log(obj);
              obj._doc.providers = data;
              return obj;
            })
            .then(data => {
              //console.log(data);
              attyArr.push(data);
              //console.log(attyArr);
              return attyArr;
            })
            .then(data => {
              //console.log(data);
              sendJSON(res, data);
            })
        })
      })
      .catch(next);
  }
});

// router.get('/api/v1/:model/:id', (req, res, next) => {
//   if(req.params.model === 'providers') {
//     models[req.params.model].find({ _id: req.params.id })
//       .populate('atty', 'name')
//       .then(data => { sendJSON(res, data) })
//       .catch(err => {
//         next();
//       });
//   }
//   else {
//     let obj;
//     models[req.params.model].findOne({ _id: req.params.id })
//       .then(data => {
//         obj = data;
//         prov.find({ atty: req.params.id })
//           .then(result => {
//             obj._doc.providers = result;
//             return obj;
//           })
//           .then(data => { 
//             sendJSON(res, data) })
//       })
//       .catch(err => {
//         next();
//       });
//   }
// });

// router.post('/api/v1/:model', (req, res, next) => {
//   if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
//     res.statusCode = 400;
//     res.statusMessage = 'Bad Request';
//     res.end();
//   }
//   else {
//     models[req.params.model].create(req.body)
//       .then(data => sendJSON(res, data))
//       .catch(next);
//   }
// });

// router.delete('/api/v1/:model/:id', (req, res, next) => {
//   models[req.params.model].findByIdAndRemove(req.params.id)
//     .then(success => {
//       res.statusCode = 204;
//       res.statusMessage = 'OK';
//       res.end();
//     })
//     .catch(err => {
//       next();
//     });
// });

// router.put('/api/v1/:model/:id', (req, res, next) => {
//   if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
//     res.statusCode = 400;
//     res.statusMessage = 'Bad Request';
//     res.end();
//   }
//   else {
//     models[req.params.model].replaceOne({ _id: req.params.id }, req.body)
//       .then(data => {
//         sendJSON(res, data)
//       })
//       .catch(err => {
//         next();
//       });
//   }
// });

// router.patch('/api/v1/:model/:id', (req, res, next) => {
//   models[req.params.model].findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(data => {
//       sendJSON(res, data)
//     })
//     .catch(err => {
//       next();
//     });
// });

export default router;