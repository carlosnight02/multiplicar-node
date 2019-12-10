const fs= require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('=================='.yellow);
    console.log(`Tabla del ${ base }`.green);
    console.log('=================='.magenta);


    for(let i= 1; i<= limite; i++){
        console.log(`${base} * ${i} = ${ base * i }` );
    }
}

let crearArchivo=(base, limite=10)=>{
    return new Promise((resolve, reject) => {
        let data='';

        if(!Number(base)){
            reject(`${base} no es un numero`);
            return;
        }

        for(let i = 1; i<= limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${ base }.txt`);
        
         });
    });
}


module.exports= {
    crearArchivo,
    listarTabla
}
