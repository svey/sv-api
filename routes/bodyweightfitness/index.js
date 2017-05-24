const bodyweightfitness = require('express').Router();
const routine = require('./routine');
const exercise = require('./exercises');
const media = require ('./media')

bodyweightfitness.get('/media/:gif', media);
bodyweightfitness.get('/:category', exercise);
bodyweightfitness.get('/', routine);

module.exports = bodyweightfitness;