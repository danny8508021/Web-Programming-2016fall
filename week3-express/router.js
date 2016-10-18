const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/query', function(req, res) {
  res.json(req.query);
});

router.post('/body', function(req, res) {
  res.send(JSON.stringify(req.body));
});

const users = [
  {
    id: 1,
    name: 'Joe',
    age: 18,
  },
  {
    id: 2,
    name: 'John',
    age: 22,
  },
];

router.get('/users/:id', function(req, res, next) {
  console.log('Get in users');
  if (req.params.id === '1' || req.params.id === '2') {
    res.send(users[req.params.id - 1]);
  }
  else next();
});

module.exports = router;