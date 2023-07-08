const https = require('https');
const fs = require('fs');

//Llamar a los argumentos
const fileName = process.argv[2];
const fileExtension = process.argv[3];
const economicIndicator = process.argv[4];
const pesosAmount = process.argv[5];

//llamar a la API
https.get('https://mindicador.cl/api', (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data += chunk;
  });
  response.on('end', () => {
    //Respuesta de la api
    const apiResponse = JSON.parse(data);

    //Fecha del momento de ejecucion
    const currentDate = new Date().toString();

    //& VALORES DE LOS INDICADORES ECONOMICOS

    //Sacar valor del dolar en la api
    const dollarValue = JSON.stringify(apiResponse.dolar.valor);

    //Sacar valor del euro en la api
    const euroValue = JSON.stringify(apiResponse.euro.valor);

    //Sacar valor del dolar intercambio de la api
    const dollarIValue = JSON.stringify(apiResponse.dolar_intercambio.valor);

    //Sacar valor del bitcoin de la api
    const bitcoinValue = JSON.stringify(apiResponse.bitcoin.valor);

    //Sacar valor del utm de la api
    const utmValue = JSON.stringify(apiResponse.utm.valor);
    

    //* FUNCIONES PARA EL INTERCAMBIO

    //Funcion para convertir pesos a dolares
    function convertToDollar(pesos, dollar) {
        const convertedAmount = pesos / dollar;
        return convertedAmount;
    }

    //Funcion para convertir pesos a euros
    function convertToEuro(pesos, euro) {
      const convertedAmount = pesos / euro;
      return convertedAmount;
    }

    //Funcion para convertir pesos a dolares intercambio
    function convertToDollarI(pesos, dollarI) {
      const convertedAmount = pesos / dollarI;
      return convertedAmount;
    }

    //Funcion para convertir pesos a bitcoin
    function convertToBitcoin(pesos, bitcoin) {
      const convertedAmount = pesos / bitcoin;
      return convertedAmount;
    }

    //Funcion para convertir pesos a utm
    function convertToutm(pesos, utm) {
      const convertedAmount = pesos / utm;
      return convertedAmount;
    }
    

    //~ FUNCIONALIDAD DEL PROYECTO

    //Condicional para revisar el indicador economico pedido
    if (economicIndicator == "dolar") {//? Cuando el indicador es dolar

      //Convertir los pesos a dolares
      let dolarConvert = convertToDollar(pesosAmount, dollarValue); 

      //Crear el template de la fecha
      const dateContent = `
      *----------------------------------------------------------------------*
        A la fecha: ${currentDate}
      *----------------------------------------------------------------------*  
      `;

      //Crear el template de la conversion a dolares
      const dollarContent = ` 
      *----------------------------------------------------------------------*
        Fue realizada cotización con los siguientes datos:
        Cantidad de pesos a convertir: ${pesosAmount} pesos 
        Converido a ${economicIndicator} da un total de: 
        ${dolarConvert}
      *----------------------------------------------------------------------*  
        `

      //Crear un archivo con el contenido generado
      fs.writeFile(`${fileName}.${fileExtension}`, dateContent + dollarContent, (error) => {
        if (error) {
          console.error('Error al crear el archivo:', error);
          return;
        }
        console.log('Archivo creado correctamente');

        //Leer el contenido del archivo y mostrarlo por consola
        fs.readFile(`${fileName}.${fileExtension}`, 'utf8', (error, content) => {
          if (error) {
            console.error('Error al leer el archivo:', error);
            return;
          }
          console.log('Contenido del archivo:', content);
        });
    });  
      
    } else if (economicIndicator == "euro") {//* Cuando el indicador es euro

      //Convertir los pesos a euros
      let euroConvert = convertToEuro(pesosAmount, euroValue);

      //Crear el template de la fecha
      const dateContent = `
      *----------------------------------------------------------------------*
        A la fecha: ${currentDate}
      *----------------------------------------------------------------------*  
      `;

      //Crear el template de la conversion a euros
      const euroContent = `
      *----------------------------------------------------------------------* 
        Fue realizada cotización con los siguientes datos:
        Cantidad de pesos a convertir: ${pesosAmount} pesos 
        Converido a ${economicIndicator} da un total de: 
        ${euroConvert}
      *----------------------------------------------------------------------*  
        `    

      //Crear un archivo con el contenido generado
      fs.writeFile(`${fileName}.${fileExtension}`, dateContent + euroContent, (error) => {
        if (error) {
          console.error('Error al crear el archivo:', error);
          return;
        }
        console.log('Archivo creado correctamente');

        //Leer el contenido del archivo y mostrarlo por consola
        fs.readFile(`${fileName}.${fileExtension}`, 'utf8', (error, content) => {
          if (error) {
            console.error('Error al leer el archivo:', error);
            return;
          }
          console.log('Contenido del archivo:', content);
        });
      });    
    }else if (economicIndicator == "dolar_intercambio") {//& Cuando el indicador es dolar intercambio
      
      //Convertir los pesos a dolar intercambio
      let dollarIConvert = convertToDollarI(pesosAmount, dollarIValue);

      //Crear el template de la fecha
      const dateContent = `
      *----------------------------------------------------------------------*
        A la fecha: ${currentDate}
      *----------------------------------------------------------------------*  
      `;

      //Crear el template de la conversion a dolar intercambio
      const dollarIContent = ` 
      *----------------------------------------------------------------------*
        Fue realizada cotización con los siguientes datos:
        Cantidad de pesos a convertir: ${pesosAmount} pesos 
        Converido a ${economicIndicator} da un total de: 
        ${dollarIConvert}
      *----------------------------------------------------------------------*     
        `    

      //Crear un archivo con el contenido generado
      fs.writeFile(`${fileName}.${fileExtension}`, dateContent + dollarIContent, (error) => {
        if (error) {
          console.error('Error al crear el archivo:', error);
          return;
        }
        console.log('Archivo creado correctamente');

        //Leer el contenido del archivo y mostrarlo por consola
        fs.readFile(`${fileName}.${fileExtension}`, 'utf8', (error, content) => {
          if (error) {
            console.error('Error al leer el archivo:', error);
            return;
          }
          console.log('Contenido del archivo:', content);
        });
      }); 
    } else if (economicIndicator == "bitcoin") {//~ Cuando el indicador es bitcoin
       
      //Convertir los pesos a bitcoin
      let bitcoinConvert = convertToBitcoin(pesosAmount, bitcoinValue);

      //Crear el template de la fecha
      const dateContent = `
      *----------------------------------------------------------------------*
        A la fecha: ${currentDate}
      *----------------------------------------------------------------------*  
      `;

      //Crear el template de la conversion a bitcoin
      const bitcoinContent = ` 
      *----------------------------------------------------------------------*
        Fue realizada cotización con los siguientes datos:
        Cantidad de pesos a convertir: ${pesosAmount} pesos 
        Converido a ${economicIndicator} da un total de: 
        ${bitcoinConvert}
      *----------------------------------------------------------------------*
        `    

      //Crear un archivo con el contenido generado
      fs.writeFile(`${fileName}.${fileExtension}`, dateContent + bitcoinContent, (error) => {
        if (error) {
          console.error('Error al crear el archivo:', error);
          return;
        }
        console.log('Archivo creado correctamente');

        //Leer el contenido del archivo y mostrarlo por consola
        fs.readFile(`${fileName}.${fileExtension}`, 'utf8', (error, content) => {
          if (error) {
            console.error('Error al leer el archivo:', error);
            return;
          }
          console.log('Contenido del archivo:', content);
        });
      });      
    } else if (economicIndicator == "utm") {//! Cuando el indicador es utm
       
      //Convertir los pesos a bitcoin
      let utmConvert = convertToutm(pesosAmount, utmValue);

      //Crear el template de la fecha
      const dateContent = `
      *----------------------------------------------------------------------*
        A la fecha: ${currentDate}
      *----------------------------------------------------------------------*  
      `;

      //Crear el template de la conversion a bitcoin
      const utmContent = ` 
      *----------------------------------------------------------------------*
        Fue realizada cotización con los siguientes datos:
        Cantidad de pesos a convertir: ${pesosAmount} pesos 
        Converido a ${economicIndicator} da un total de: 
        ${utmConvert}
      *----------------------------------------------------------------------*
        `    

      //Crear un archivo con el contenido generado
      fs.writeFile(`${fileName}.${fileExtension}`, dateContent + utmContent, (error) => {
        if (error) {
          console.error('Error al crear el archivo:', error);
          return;
        }
        console.log('Archivo creado correctamente');

        //Leer el contenido del archivo y mostrarlo por consola
        fs.readFile(`${fileName}.${fileExtension}`, 'utf8', (error, content) => {
          if (error) {
            console.error('Error al leer el archivo:', error);
            return;
          }
          console.log('Contenido del archivo:', content);
        });
      });
    } else{
      //Crear el template de la fecha
      const dateContent = `
      *----------------------------------------------------------------------*
        A la fecha: ${currentDate}
      *----------------------------------------------------------------------*  
      `;      

      const fileContenError = `
      LO SIENTO PERO EL INDICADOR ECONOMICO QUE REFERENCIO ES INEXISTENTE...
      PRUEBE CON: 
      *----------------------------------------------------------------------*
      -----> dolar
      -----> dolar_intercambio
      -----> utm
      -----> bitcoin
      -----> euro
      *----------------------------------------------------------------------*
      RECUERDE QUE ESTE PROGRAMA SOLO CAMBIA
          " ** PESOS CHILENOS A EL INDICADOR ECONOMICO DESEADO ** "
      `
      //Crear un archivo con el contenido generado
      fs.writeFile(`${fileName}.${fileExtension}`, dateContent + fileContenError , (error) => {
        if (error) {
          console.error('Error al crear el archivo:', error);
          return;
        }
        console.log('Archivo creado correctamente');

        //Leer el contenido del archivo y mostrarlo por consola
        fs.readFile(`${fileName}.${fileExtension}`, 'utf8', (error, content) => {
          if (error) {
            console.error('Error al leer el archivo:', error);
            return;
          }
          console.log('Contenido del archivo:', content);
        });
      });  
    }


  });
}).on('error', (error) => {
  console.error('Error al consultar la API:', error);
});
