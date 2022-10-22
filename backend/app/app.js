const express = require('express');
const app = express();

app.get('/prueba',function(req,res,next){
    res.status(200).json({nombre:'jessddan'})
})
module.exports = app;


