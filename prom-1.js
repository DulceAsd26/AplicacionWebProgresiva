
//console.log('Hola Mundo');
function sumarUno( numero, callback){

    if( numero >= 7){
        callback('Numero muy alto');
        return;
    }
    setTimeout( function(){

       // return numero + 1;
       callback(null, numero + 1);

    }, 800);

}


sumarUno(5, function(error, nuevoValor) {

    if (error) {
        console.log(error);
        return;
        
    }
    sumarUno( nuevoValor, function(error, nuevoValor2 ){

        if (error) {
            console.log(error);
            return;
            
        }
        sumarUno(nuevoValor2, function(error, nuevoValor3 ){
            console.log(nuevoValor3);
         if (error) {
            console.log(error);
            return;
                
            }
        });
    });
});

