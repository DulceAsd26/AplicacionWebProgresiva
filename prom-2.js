

function sumarUno( numero){

    var promesa = new Promise( function(resolve, reject){

    setTimeout( function(){

       resolve( numero + 1);

    }, 800);

});


    return promesa;
}


sumarUno( 5 ).then( nuevoNumero => {
    console.log(nuevoNumero);
    return sumarUno( nuevoNumero);
})
.then( nuevoNumero => {
    console.log(nuevoNumero);
    return sumarUno( nuevoNumero);
})
.then( nuevoNumero => {
    console.log(nuevoNumero);
})


