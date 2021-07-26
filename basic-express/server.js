const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set up pug as view engine
app.set('view engine', 'pug');

// Add the bodyParser middelware to the express application
app.use(bodyParser.urlencoded({extended: false}));

// Specify the url prefix and import routes
app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});