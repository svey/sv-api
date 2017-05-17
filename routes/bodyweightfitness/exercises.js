const data = require('../../data.json');

module.exports = (req, res) => {
  const category = req.params.category;
  const exercises = data.routine.filter(exercise => exercise.category === category);
  res.status(200).json({ exercises });
};