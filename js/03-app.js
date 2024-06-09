const aplicarDescuento = new Promise((resolve, reject) => {
  let descuento = false;
  if(descuento) {
    resolve('se aplicó el descuento')
  } else {
    reject('error al aplicar descuento')
}
})

aplicarDescuento
   .then(resultado=>descuento(resultado))
   .catch(error =>  descuento(error) )
    
   

function descuento(mensaje){
    console.log(mensaje);
}



//tener en cuenta que hay un tercer estado pending que es cuando ni se rechazó ni se resolvió 