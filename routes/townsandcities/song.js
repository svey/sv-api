const path = require('path');

module.exports = (req, res) => {
  const song = req.params.track;
  res.status(200).sendFile(path.join(__dirname, '../../', `media/townsandcities/${song}.mp3`));
};
