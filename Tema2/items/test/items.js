var assert = require("assert"),
items = require(__dirname+"/../items.js");

// Variable local
var item;

describe('Porra', function(){

    describe('Carga', function(){
        it('Deberia estar cargado el  módulo', function(){
            assert(items, "Cargado");
        });
    });

    item = new items.Items("CajaMarron", "6", "500");
    describe('ID', function(){
        it('Debería ser correcto el ID', function(){
            assert.equal(item.ID, "ID_CajaMarron");
        });    
    });
});