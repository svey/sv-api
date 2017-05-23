const routes = require('express').Router();
const bodyweightfitness = require('./bodyweightfitness');
const images = require('./images');

routes.use('/bodyweightfitness', bodyweightfitness);
routes.use('/images', images);

routes.get('/', (req, res) => {
  res.status(200).sendFile('/Users/marcus/Desktop/sv-api/index.html');
});

module.exports = routes;