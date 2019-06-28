// Dado un array de diez elementos ,borrar el tercer elemento

var aMiarray = [];
aMiarray[0] = 19;
aMiarray[1] = 1;
aMiarray[2] = 8;
aMiarray[3] = "hola";
aMiarray[4] = true;

/*for (var i = 0; i <= 5; i++){
	aMiarray[i] = prompt("Introduzca un dato");
} */

aMiarray.splice(2,1); //elimina con 2 argumentos, el primero es la posicion, y el segundo las casillas contiguas incluyendo la posicion indicada,Con 1 solo argumento borra todo desde la posicion hasta el final;
console.log(aMiarray);
