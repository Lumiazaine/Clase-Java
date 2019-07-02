// crear una función que reciba como argumentos dos números y nos devuelva una suma
// mostrar el resultado con un alert


operacion();
// var num1 = Number(prompt("Introduce el primer numero"));
// var num2 = Number(prompt("Introduce el segundo numero"));
// // num1 = Number(num1);
// num2 = Number(num2);

/////////////////////////////////////////////////////////////////////

function sumaDosNumeros(num1, num2){

	var resultado = num1 + num2;
	
	return resultado;
}

function despedida(){

	alert("Gracias por utilizar el sumador")
}

function operacion(){

	var num1 = Number(prompt("Introduce el primer numero"));
	var num2 = Number(prompt("Introduce el segundo numero"));
	var elResultado = sumaDosNumeros(num1,num2);
	alert("El resultado es " + elResultado);
// var elResultado = sumaDosNumeros(num1,num2);
// sumaDosNumeros(5,8);

// alert("El resultado es " + elResultado);

var respuesta = prompt("¿Desea hacer otra suma?"); //si o no

if (respuesta == "si") {

	operacion();

}
else{

	despedida();

}
}
/////////////////////////////////////////////////////////////////////

// var elResultado = sumaDosNumeros(num1,num2);
// // sumaDosNumeros(5,8);

// alert("El resultado es " + elResultado);

// var respuesta = prompt("¿Desea hacer otra suma?"); //si o no

// if (respuesta == "si") {

// 	operacion();

// }
// else{

// 	despedida();

// }