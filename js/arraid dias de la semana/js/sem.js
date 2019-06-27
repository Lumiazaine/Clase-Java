// Ejercico arrays días de la semana
// la "a" del principio es una regla nemotécnica para identificarlo, No es necesario.
// .lenght sirve para saber el tamaño de una array

var aDiasSemana= ["Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo"]
// document.write ("El segundo día de la semana es el " + aDiasSemana[1]) 


console.log(aDiasSemana.length);

	// for(var i=0;i<=6;i++)
	// for(var i=0;i<aDiasSemana.length;i++) (Esto es si no lo sabemos, para que nos sube su valor total).
	for(var i=0;i<aDiasSemana.length;i++){
 	document.write("<div>"+ aDiasSemana[i] + "</div>")
}