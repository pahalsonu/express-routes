/* user Route */

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('This is user homepage' + req.method);
});

router.post('/', (req, res, next) => {
  res.send('This is user homepage' + req.method);
});

router.put('/', (req, res, next) => {
  res.send('This is user homepage' + req.method);
});

router.delete('/', (req, res, next) => {
  res.send('This is user homepage' + req.method);
});
router.post('/login', (req, res, next) => {
    res.send('This is user login homepage' + req.method);
  });

  router.get('/dashboard', (req, res, next) => {
    res.send('This is user dashboard homepage' + req.method);
  });
module.exports = router;