// Definición de la clase Items: 
//
//    var item = new Items(nombre,cantidad,precio);
//
//* `nombre` = nombre item
//* `cantidad` = numero de items
//*  `precio` = valor

exports.Items = function(nombre, cantidad, precio){
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
    this.items = new Object;
    this.ID = creaID(nombre);
}

function vars(){
    return ['nombre', 'cantidad', 'precio'];
}

function getApuestas(){
    return this.items;
}

function getID() {
    return this.ID;
}

function creaID(nombre){
    return "ID_" + nombre;
}

