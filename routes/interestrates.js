var express = require('express');
var router = express.Router();
var Store = require("jfs");
var db = new Store("data",{pretty:true});

/* GET users listing. */
router.get('/', function(req, res, next) {
	var obj = db.getSync("interest");
    //var query = req.params.query;
   // query = query.toLowerCase();
   //console.log(obj);
    var result = {
       "interestrates":[]
    };
    	obj.interestrates.map(function(interest){
    		//if(airport.name.toLowerCase().indexOf(query)> -1 || airport.city.toLowerCase().indexOf(query)>-1 || airport.countryname.toLowerCase().indexOf(query)>-1){
    		    result.interestrates.push(interest);
    		
    	});
    res.send(result);
});

module.exports = router;
