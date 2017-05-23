const routes = require('express').Router();
const path = require('path')
const bodyweightfitness = require('./bodyweightfitness');
const images = require('./images');

routes.use('/bodyweightfitness', bodyweightfitness);
routes.use('/images', images);

routes.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../', 'index.html'));
});

module.exports = routes;