// crear objeto cuenta corriente con varias propiedades.
// posteriormente recorremos el objeto listando sus propiedades en el navegador
// añadir una imagen 

var cuentaCorriente = {

	Nombre: "Peppa",
	Apellido: "Pig",
	Saldo:0,
	Premium:true,
	foto:"peppa-pig.jpg"
}

document.write("<h1> Ficha de cliente</h1>");

for(var datos in cuentaCorriente){

	document.write(datos+ " : " + cuentaCorriente[datos] + "<br>");
}

document.write("<img src=img/" + cuentaCorriente["foto"]+">");