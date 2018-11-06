var express = require('express');
var app = express();

var items = require("./items.js");

var almacenItems = new Object;

// Establecemos los requisitos de puerto e IP
var ip = '127.0.0.1';
var puerto = 5000;
app.set('puerto', puerto);
app.use(express.static(__dirname + '/public'));

// Crea un nuevo item
app.put('/item/:nombre/:cantidad/:precio', function(req, response){
    var nuevoItem = new items.Items(req.params.nombre, req.params.cantidad, req.params.precio);
    almacenItems[nuevoItem.ID] = nuevoItem;
    response.status(200).send(nuevoItem);
});

// Mostramos todos los items
app.get('/item', function(request, response){
    response.send(almacenItems)
});

// Mostramos por ID
app.get('/item/:ID', function(request, response){

    var identificador = request.params.ID;
    
    if(!almacenItems[identificador]) {
        response.status(404).send("No existe ID");
    } else {
        response.status(200).send(almacenItems[identificador].ID);
    }
});

// Escucha puerto determinado
app.listen(app.get('puerto'), ip, function(){
    console.log("Items app running en " + ip + ":" + app.get('puerto'));
});

// Exporta la variable para poder hacer tests
module.exports = app;