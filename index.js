const app = require('express')();
const routes = require('./routes');
const port = process.env.PORT || 8080;

app.use('/', routes);

app.listen(port, () => {
  console.log('SV API Online')
});