//Agregar el Módulo express
const express = require("express"); 
//Instanciar express
const app = express();
//Agregar las funciones de firebase
//const funcionesFirebase = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'ejerciciolaureate.firebaseapp.com'
});

//Importar los archivos
var usuarios = require("./controllers/usuarios");
app.use(usuarios);

app.use(express.static("public"));

//Código extraído de dialogflowchart

'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Hola, ¿cómo puedo ayudarte?!`);
  }
 
  function tsc(agent) {
    agent.add(`Las actividades planificadas para realizar horas de trabajo social son:`);
    return admin.database().ref('planificaciones').once("value").then((snap)=> {
        
    })
    //agent.add();
    }
  function calendario(agent) {
    agent.add(`el calendario que se encuentra en vigencia es:`);
  }
  function contacto(agent) {
    agent.add(`Hola, ¿cómo puedo ayudarte?!`);
  }
  function deptosistemas(agent) {
    agent.add(`Hola, ¿cómo puedo ayudarte?!`);
  }
  function planFlujograma(agent) {
    agent.add(`Hola, ¿cómo puedo ayudarte?!`);
  }
  function cancelar(agent) {
    agent.add(`Hola, ¿cómo puedo ayudarte?!`);
  }
  function graduar(agent) {
    agent.add(`Hola, ¿cómo puedo ayudarte?!`);
  }

  function reportar(agent) {
    agent.add(`Hola, ¿cómo puedo ayudarte?!`);
  }
  function aperturaSeccion(agent) {
    agent.add(`Hola, ¿cómo puedo ayudarte?!`);
  }
  function practicaProfesional(agent) {
    agent.add(`Hola, ¿cómo puedo ayudarte?!`);
  }
  // // Uncomment and edit to make your own intent handler
  // // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function yourFunctionHandler(agent) {
  //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
  //   agent.add(new Card({
  //       title: `Title: this is a card title`,
  //       imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
  //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
  //       buttonText: 'This is a button',
  //       buttonUrl: 'https://assistant.google.com/'
  //     })
  //   );
  //   agent.add(new Suggestion(`Quick Reply`));
  //   agent.add(new Suggestion(`Suggestion`));
  //   agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' }});
  // }

  // // Uncomment and edit to make your own Google Assistant intent handler
  // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function googleAssistantHandler(agent) {
  //   let conv = agent.conv(); // Get Actions on Google library conv instance
  //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
  //   agent.add(conv); // Add Actions on Google library responses to your agent's response
  // }
  // // See https://github.com/dialogflow/fulfillment-actions-library-nodejs
  // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Bienvenida al estudiante', welcome);
  intentMap.set('Actividades disponibles para realizar horas de trabajo social', tsc);
  intentMap.set('Calendario académico', calendario);
  intentMap.set('Contacto de autoridades', contacto);
  intentMap.set('Horarios y ubicación del departamento de ingeniería en sistemas', deptosistemas);
  intentMap.set('Plan y flujograma de clases', planFlujograma);
  intentMap.set('Proceso para cancelación de clases', cancelar);
  intentMap.set('Proceso para graduación', graduar);
  intentMap.set('Proceso para reportar', reportar);
  intentMap.set('Proceso para solicitar apertura de clases', aperturaSeccion);
  intentMap.set('Requisitos para práctica profesional', practicaProfesional);

  // intentMap.set('your intent name here', yourFunctionHandler);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});






//Puerto a utilizar
app.listen(3000);