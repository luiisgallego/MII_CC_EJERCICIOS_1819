var express = require("express");
var http = require("http");
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'porra'
});
 
var app = express();

connection.connect(function(err){
  if(!err){
    console.log("Database conectada.");
  } else {
    console.log("Error conexion bd");
  }
});

app.get("/", function(req,res){

  connection.query('SELECT * FROM porras', function (err, results, fields) {
  
    if(!err) {
      console.log('The solution is: ', results);
      res.send(results);
    }
    else console.log('Error query');
    
  });
});

app.listen(3000);
