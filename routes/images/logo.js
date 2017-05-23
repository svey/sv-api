const path = require('path');

module.exports = (req, res) => {
  const logo = req.params.name;
  res.status(200).sendFile(path.join(__dirname, '../../images', logo));
};