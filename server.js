var express = require('express');
var app = express();
var fs = require("fs");
app.use(express.static(__dirname + '/UI'));
app.set('port', (process.env.PORT || 5000)); 
app.get('/', function (req, res) {
	res.header("Content-Type", "text/html");
	console.log('*****************************');
	fs.readFile( __dirname + "/" + "UI/index.html", 'utf8', function (err, data) {
	console.log('*****************************')
	console.log(req.url);
    res.end( data );
   });
})
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});