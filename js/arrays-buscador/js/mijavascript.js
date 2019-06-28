//Encontrar la posicion en la que se encuentra "Jesus
var aNombres = ["Joselu","Arturo","Rafael","Jesus","David","Guillermo","Encarni"];
var longitudArray = aNombres.length; // 7

var nombreBuscar = prompt("Escribe el nombre a buscar");

for (var i = 0; i < longitudArray;i++){

	if (aNombres[i] == nombreBuscar){
		document.write("La posicion donde se encuentra "+ nombreBuscar + " es " + i);
		
		break; //Finaliza la iteracion
	}
	else if (i == aNombres.length - 1){
		document.write("No se ha encontrado el nombre " + nombreBuscar);
		
	}
}

