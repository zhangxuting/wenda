const mysql = require('mysql');
const config = require('../config');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : config.database.localhost,
  user            : config.database.user,
  password        : config.database.password,
  database        : config.database.database
});

module.exports = pool;