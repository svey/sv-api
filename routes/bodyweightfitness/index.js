const bodyweightfitness = require('express').Router();
const routine = require('./routine');
const exercise = require('./exercises');

bodyweightfitness.get('/:category', exercise);
bodyweightfitness.get('/', routine);

module.exports = bodyweightfitness;