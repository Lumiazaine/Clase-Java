var fuerzaOrco; 		// Variable Orco.
var fuerzaElfo; 		// Variable Elfo.
// var fuerzaPocion=0; (Al final no se usó) 	// Variable Poción.
var numeroAleatorio; 	// Variable Número aleatorio.
var decisionPocima;


// Entrada de datos
	
	fuerzaOrco = prompt ("introduzca el valor de la fuerza del orco");
	fuerzaElfo = prompt ("introduzca el valor de la fuerza del elfo");
		
		//como el metodo prompt devuelve un string, neceisto pasar estos valores a number. (fuerzaOrco = number(fuerzaOrco)).

		fuerzaOrco =Number (fuerzaOrco);
		fuerzaElfo =Number (fuerzaElfo); 

		//El elfo se encuentra con una poción. (Easter Egg)

		prompt("El elfo se encuentra con una poción en el camino\n"+
			"1 - Te la tomas\n"+
			"2 - No te la tomas");

			if (decisionPocima=1) {

				numeroAleatorio = Math.random();

				if (numeroAleatorio >= 0.5) {
					fuerzaElfo = fuerzaElfo + 5;
				}

				else {
					fuerzaElfo= fuerzaElfo - 5}
				}
				else if (decisionPocima=2) {decisionPocima = 0}
				
				if (decisionPocima >2 || decisionPocima <=0) {} {alert ("Escribe un valor")
				}

// if (decisionPocima >2 || decisionPocima <=0) {} {alert ("Escribe un valor")} Se ha añadido como valor para evitar que escoja otro valor
				
//numeroAleatorio = Math.random(); (esta función sirve para agregar números aleatorios)
//document.write(numeroAleatorio); (esta función la hemos utilizado para que nos plasme que valor es)
			
			

			if (fuerzaOrco == fuerzaElfo){alert ("No gana nadie")}
			if (fuerzaOrco > fuerzaElfo) {alert ("El Oco gana")}
			if (fuerzaOrco < fuerzaElfo) {alert ("El Efo gana")}
		
//la función "Number" es diferente a "number" dando error en el resultado.
//la función "\n" es para hacer "intros".