
let paises = ["colombia","venezuela","panamá","chile","argentina"];


function agregarPais(pais,callback){
    setTimeout(() => {
       paises.push(pais);
       callback(); 
    }, 2000);
}

function mostrarPaises(){
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });
        
    }, 1000);
            

}


mostrarPaises();
debugger;
agregarPais("brazil",mostrarPaises);
debugger;
agregarPais('mexico',mostrarPaises);