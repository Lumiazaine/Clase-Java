var fuerzaOrco; // Variable Orco.
var fuerzaElfo; // Variable Elfo.

// Entrada de datos
	
	fuerzaOrco = prompt  ("introduzca el valor de la fuerza del orco");
	fuerzaElfo = prompt ("introduzca el valor de la fuerza del elfo");
		
		if (fuerzaOrco == fuerzaElfo) {
		alert ("No gana nadie")
		}
		else if (fuerzaOrco > fuerzaElfo) {alert ("El orco gana") }
			else {alert ("El Elfo gana") }

//este resultado estaría mal, ya que el valor no sería númerico, por lo que tendería a producir errores. (aunque salga bien)