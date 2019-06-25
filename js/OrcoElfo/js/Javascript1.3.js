var fuerzaOrco; 		// Variable Orco.
var fuerzaElfo; 		// Variable Elfo.
var fuerzaPocion=0; 	// Variable Poción.
var numeroAleatorio; 	// Variable Número aleatorio.

// Entrada de datos
	
	fuerzaOrco = prompt ("introduzca el valor de la fuerza del orco");
	fuerzaElfo = prompt ("introduzca el valor de la fuerza del elfo");
		//como el metodo prompt devuelve un string, neceisto pasar estos valores a number.
		// fuerzaOrco = Numbre (fuerzaOrco)

		fuerzaOrco =Number (fuerzaOrco);
		fuerzaElfo =Number (fuerzaElfo); 

		//El elfo se encuentra con una poción. (Easter Egg)

		prompt("El elfo se encuentra con una poción en el camino\n"+
			"1 - Te la tomas\n"+
			"2 - No te la tomas");

			numeroAleatorio = Math.random();
			document.write(numeroAleatorio);

			if (fuerzaOrco == fuerzaElfo){alert ("No gana nadie")}
			if (fuerzaOrco > fuerzaElfo) {alert ("El Oco gana")}
			if (fuerzaOrco < fuerzaElfo) {alert ("El Efo gana")}
		
//la función "Number" es diferente a "number" dando error en el resultado.
//la función "\n" es para hacer "intros".