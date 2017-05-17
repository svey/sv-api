const routes = require('express').Router();
const bodyweightfitness = require('./bodyweightfitness');

routes.use('/bodyweightfitness', bodyweightfitness);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;