'use strict'

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pisito', function(err, res){

	if (err) {

		throw err;

	}else{

		console.log("La conexión de la BBDD funciona");

	}

} );