var request = require('supertest'),
should = require('should'),
app = require('../index.js'),
want_name = "prueba2"
want_id = "ID_prueba2";


describe("Añadimos nuevo item", function(){

    it('Debería CREARLO', function(done){
        request(app)
            .put('/item/prueba/3/100')  
	        .expect('Content-Type', /json/)
            .expect(200, done)
    });

    it('Debería devolver el ID',function(done){
        request(app)
            .put('/item/prueba2/5/300')
            .expect('Content-Type',/json/)
            .expect(200)
            .end(function(error, resultado){
                if(error) {
                    return done(error);
                } else {                    
                    //console.log("ERROR LOGG:" + resultado.body.ID + " ... FIN_2");
                    resultado.body.should.have.property('ID', want_id);
                    done();
                }                
            });
    });

    /*it('Debería devolver el ID',function(done){
        request(app)
            .get('/item/prueba2')
            .expect('Content-Type','text/html; charset=utf-8')
            .expect(200)
            .end(function(error, resultado){
                if(error) {
                    console.log("Error ID.");
                    done(error);
                } else {                    
                    //console.log("ERROR LOGG:" + resultado.body + " ... FIN_2");
                    //resultado.body.should.have.property('ID', want_id);
                    resultado.body.should.exist;
                    done();
                }                
            });
    });*/
});