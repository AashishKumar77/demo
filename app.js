var app = require('express')();
var body = require('body-parser');
var cors = require('cors');
var user = require('./routes/user');
var db = require('./routes/db');
app.use(cors());
server = app.listen(3000, function () {
  console.log(new Date().toISOString() + ": server started on port 3000 working");
  console.log('CORS-enabled web server listening on port 3000')
});

app.use(body.json({ limit: '50mb' }));
app.use(body.urlencoded({ extended: false, limit: '50mb', parameterLimit: 500000000 }));
app.use(body.json());
app.use('/user', user);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', ['GET,PUT,POST,DELETE', 'OPTIONS']);
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true")
  next();
});

module.exports = app;


