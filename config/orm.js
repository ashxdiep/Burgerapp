// import the sql connection
var connection = require ("../config/connection.js");


//make orm for mysql connection
var orm = {
// selectAll()
selectAll: function (table, cb){
  //get everything from burgers table
  var query = "SELECT * FROM " + table + ";";

  console.log("query string: " + query);

  connection.query(query, function(err,res){
    if (err) {throw err;}
    cb(res);
  });

},

// insertOne() creating a new burger to be yet devoured
insertOne : function (table, col1, col2, val, cb){

  //insert into the table
  var quere = "INSERT INTO " + table + "(";

  //where burger_name and devoured is false
  quere+= col1.toString() + ", " + col2.toString() + ") ";
  quere += "VALUES (\"" + val + "\",  \"FALSE\" );";

  console.log("query string: " + quere);

  //do the query search
  connection.query(quere, function(err, result){

    if (err) {throw err;}
    cb (result);
  });
},

//update to devoured shit
updateOne: function(table, namecolumn, targetcolumn, id, updatedName, cb){
  var qstring = "UPDATE " + table;

  //set the burger name to the new name where the id matches
  qstring += " SET devoured = TRUE WHERE " + targetcolumn + "=" + id;

  console.log("query string: " + qstring);

  connection.query(qstring, function (err, result){

    if(err) {throw err;}
    cb(result);
  });

},

// deleteOne()
deleteOne: function(table, cols, vals, cb){
  //delete from table where the id = the id
  var dastring = "DELETE FROM " + table + " WHERE ";
  dastring += cols + " = " + vals;

  //query connection
  connection.query(dastring, function(err,result){
    if (err){throw err;}

    cb(result);
  });

}
};

//export the orm object for the burger  controller to user
module.exports = orm;
