//import the orm to help function to do burger shit
var orm = require ("../config/orm.js");

//the functions to control the burger
var burger = {

  //get all the burgers
  all: function(cb){
    orm.selectAll("burgers", function (res){
      //after getting from orm, call back again to api routes
      cb(res);
    });
  },

  //create a new burger object
  create: function (col, col2, val, cb){

    //get from orm
    orm.insertOne("burgers", col, col2, val, function(res){

      //after getting back from orm send back result to api routes
      cb(res);
    });
  },

  update: function(col2change, targetcolumn, id, updatedName, cb){
    console.log("updatedName: " + updatedName);
    orm.updateOne("burgers", col2change, targetcolumn, id, updatedName, function(res){

      cb(res);
    });
  },

  //de;ete the devoured burger object
  delete: function(cols, vals, cb){

    //delete using orm
    orm.deleteOne("burgers", cols, vals, function (res){

      //after getting back from orm send back to api
      cb(res);
    });
  }
};

//export this burger functions to the burger controller to use
module.exports = burger;
