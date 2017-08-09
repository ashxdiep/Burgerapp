//set up mySQL connection
var mysql = require ("mysql");

var connection = mysql.createConnection({
  port: 8889,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burger_db"
});

//make the connection to the database
connection.connect(function(err){
  if (err){
    console.log("error: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export this connection for ORM
module.exports = connection;
