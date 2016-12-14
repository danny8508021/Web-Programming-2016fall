import { Router } from 'express';

import { Article } from '../models/index';
// console.log('get', Article);

const articleRouter = new Router();

articleRouter.get('/', (req, res) => {
  Article.find({}, (err, articles) => {
    if(err) return res.status(500).send(err);
    return res.json(articles);
  })
});

articleRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  Article.findById(id, (err, article) => {
    if(err) return res.status(500).send(err);
    return res.json(article);  
  });
});

articleRouter.post('/', (req, res) => {
  const { title, content, tags } = req.body;

  Article.create({
    title,
    content,
    tags
  }, (err, article) => res.json(article));
});

articleRouter.put('/:id', (req, res) => {
  const { title, content, tags } = req.body;
  const query = {
    _id: req.params.id,
  };

  Article.findOneAndUpdate(query, {
    title, content, tags
  }, {new: true }, (err, article) => res.json(article));
});

articleRouter.delete('/:id', (req, res) => {
  const id = req.params.id;

  Article.findByIdAndRemove(id, err => {
    if(err) return res.status(500).send(err);
    return res.send('content of id: ' + id + ' has been remove.');
  });
});

export default articleRouter;
