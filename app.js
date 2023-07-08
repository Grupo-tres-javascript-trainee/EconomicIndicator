const { exec } = require('child_process');

//Obtener los argumentos de la línea de comandos
const [fileName, fileExtension, economicIndicator, pesosAmount] = process.argv.slice(2);

//Ejecutar la aplicacion 
exec(`node menss.js ${fileName} ${fileExtension} ${economicIndicator} ${pesosAmount}`, (error, stdout, stderr) => {
  if (error) {
    console.error('Error al ejecutar la aplicación externa:', error);
    return;
  }
  
  if (stderr) {
    console.error('Error en la salida de la aplicación externa:', stderr);
    return;
  }

  console.log('Salida de la aplicación externa:', stdout);

});
