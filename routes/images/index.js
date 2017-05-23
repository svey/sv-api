const images = require('express').Router();
const logo = require('./logo');

images.get('/:name', logo);

module.exports = images;