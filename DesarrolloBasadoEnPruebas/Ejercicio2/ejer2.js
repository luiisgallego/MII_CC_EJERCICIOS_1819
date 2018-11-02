var express = require("express");
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : ''
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

  connection.query('SELECT 1 + 1 AS solution', function (err, results, fields) {

    connection.end();
  
    if(!err) console.log('The solution is: ', results);
    else console.log('Error query');
    
  });
});

app.listen(3000);
