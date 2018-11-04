var express = require('express');
var app = express();
var items = require("./items.js");

var almacenItems = new Object;

// Crea un nuevo item
app.put('/item/:nombre/:cantidad/:precio', function(req, response){

    var nuevoItem = new items.Items(req.params.nombre, req.params.cantidad, req.params.precio);
    almacenItems[nuevoItem.ID] = nuevoItem;
    response.status(200).send(nuevoItem);
});

// Mostramos todos los items
app.get('/items', function(request, response){
    response.send(almacenItems)
})

// Escucha puerto determinado
app.listen(5000, function(){
    console.log("Items app running at 5000.");
});