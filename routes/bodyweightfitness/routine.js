const data = require('../../data.json');

module.exports = (req, res) => {
  const routine = data.routine;
  res.status(200).json({ routine });
};