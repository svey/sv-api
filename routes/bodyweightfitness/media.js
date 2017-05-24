const path = require('path');

module.exports = (req, res) => {
  const gif = req.params.gif;
  res.status(200).sendFile(path.join(__dirname, '../../', `media/liftu/${gif}.gif`))
};