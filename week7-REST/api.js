import { Router } from 'express';

const router = new Router();

const obj = { 
  users: [
      { avator: 'http://xxx.com', name: 'John', age: 23 },
      { avator: 'http://xxx.com', name: 'Amy', age: 18 },
  ],
};

// Write your restful api here:
router.get('/users', (req, res) => {
  res.json(obj);
});

router.get('/users/:id', (req, res, next) => {
  console.log('get', req.params);
  if(req.params.id === '1' || req.params.id === '2')
    res.json(obj.users[parseInt(req.params.id) - 1]);
  else next();
});

export default router;
