let paises = [];

const agregarPaises = pais => new Promise(resolve =>{
    setTimeout(() => {
        paises.push(pais);
        resolve(`pais agregado: ${pais}`);
    }, 2000);
})


agregarPaises('colombia')
    .then((result) => {
        console.log(paises)
        console.log(result)
        return agregarPaises('italia')
    })
    .then((result) => {
        console.log(result);
        console.log(paises);
        return agregarPaises('dinamarca') 
    }).then(result =>{
        console.log(result);
        console.log(paises);
    })