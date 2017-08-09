var express = require ("express");

var router = express.Router();

//import to burger functions to use (burger.js)
var burger = require ("../models/burger.js");

//creating routes (bascially the apiroutes)

// when wanting to get all the burgers (whether devoured or not)
router.get("/", function (req, res){

  //get all of burgers using controller
  burger.all(function(data){

    //will return back all the burgers
    var sumObject = {
      burgers: data
    };
    console.log("what is sumObject "+ sumObject);

    //render it to the index page
    res.render("index", sumObject);
  });
});

//when posting a new burger to be devoured
router.post("/", function (req, res){

  //controller of burger to post a new burger
  burger.create("burger_name", "devoured", req.body.name, function(){

    //
    res.redirect("/");
  });
});

//when we updating a new burger with a new name
router.put("/:id", function(req, res){

  var burger_id = req.params.id;
  console.log("req body: " + req.body.name);
  burger.update("burger_name", "id", burger_id, req.body.name, function(){
    //go back to displaying all current burgers
    res.redirect("/");
  });
});

//when deleting the burger from the devoured side
router.delete("/:id", function(req, res){

  var burger_id = req.params.id;

  burger.delete("id", burger_id, function(){
    //update the page with deleted items
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
