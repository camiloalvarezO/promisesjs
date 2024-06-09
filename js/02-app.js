let paises = ['Alemania'];

function agregarPaises(pais,callback){
    paises.push(pais);
    console.log(`país agregado: ${pais}`);
    callback();
}

function mostrarPaises(){
    console.log(paises);
}


function iniciarCallbackHell(){
    setTimeout(() => {
        agregarPaises('Chile',mostrarPaises)
        setTimeout(() => {
          agregarPaises('colombia',mostrarPaises)
          setTimeout(() => {
                agregarPaises('peru',mostrarPaises)
          }, 2000);  
        }, 2000);
    }, 2000);
}


iniciarCallbackHell();