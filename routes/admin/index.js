/* Admin Route */

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('This is admin homepage' + req.method);
});

router.post('/', (req, res, next) => {
  res.send('This is admin homepage' + req.method);
});

router.put('/', (req, res, next) => {
  res.send('This is admin homepage' + req.method);
});

router.delete('/', (req, res, next) => {
  res.send('This is admin homepage' + req.method);
});
router.post('/login', (req, res, next) => {
    res.send('This is admin login homepage' + req.method);
  });

  router.get('/dashboard', (req, res, next) => {
    res.send('This is admin dashboard homepage' + req.method);
  });
module.exports = router;