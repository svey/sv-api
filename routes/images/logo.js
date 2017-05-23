module.exports = (req, res) => {
  const logo = `/Users/marcus/Desktop/sv-api/images/${req.params.name}`;
  res.status(200).sendFile(logo);
};