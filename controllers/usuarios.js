//Agregar el Módulo express
const express = require("express"); 
const router = express.Router();

var firebase = require("../public/connection");
//Referencia a la base de datos
const db = firebase.database().ref();


router.get("/usuarios", (req, res)=>{
    const datos = db.child("usuarios");
    datos.once("value", snap =>{
        if(snap.exists()){
            //console.log(snap.val());
            res.send(snap.val());
        }
        else{
            res.send({
                status: 1, message: "No se encontraron datos."
            });
        }
    });
});

module.exports = router; 
//getChildrenCount()
