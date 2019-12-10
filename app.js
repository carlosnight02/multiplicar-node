const  argv=  require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla} = require('./multiplicar/multiplicar.js');

let comando= argv._[0];

switch(comando)
{
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;   
    
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(cadenaArchivo => console.log(`Archivo creado: ${colors.rainbow(cadenaArchivo)}`))
            .catch(e => console.log(e));
    break;  

    default:
        console.log('Comando no reconocido');
}



//let parametro= argv[2];
//let base= parametro.split('=')[1]


