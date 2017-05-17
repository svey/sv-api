const data = require('../../data.json');

module.exports = (req, res) => {
  const routine = data;
  res.status(200).json({ routine });
};