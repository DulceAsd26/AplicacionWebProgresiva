

function sumarUno( numero){

    var promesa = new Promise( function(resolve, reject){

        console.log(numero);
        if (numero >= 7) {
            reject('El numero es muy alto');
        }

    setTimeout( function(){

       resolve( numero + 1);

    }, 800);

});


    return promesa;
}


sumarUno( 8 )
   .then( sumarUno )
   .then( sumarUno )
   .then( sumarUno )
   .then( nuevoNumero => {
    console.log(nuevoNumero);
})
.catch( error => {
    console.log('ERROR DE PROMESA');
    console.log(error);
});


