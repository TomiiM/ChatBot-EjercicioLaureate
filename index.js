//Agregar el Módulo express
const express = require("express"); 
//Instanciar express
const app = express();
//Agregar las funciones de firebase
//const funcionesFirebase = require("firebase-functions");
// const admin = require("firebase-admin");
// admin.initializeApp({
//     credential: admin.credential.applicationDefault(),
//     databaseURL: 'ejerciciolaureate.firebaseapp.com'
// });

//Importar los archivos
var usuarios = require("./controllers/usuarios");
app.use(usuarios);

app.use(express.static("public"));







//Puerto a utilizar
app.listen(3000);