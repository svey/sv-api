const townsandcities = require('express').Router();
const song = require('./song');

townsandcities.get('/:track', song);

module.exports = townsandcities;