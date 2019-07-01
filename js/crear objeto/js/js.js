// crear objeto cuenta corriente con varias propiedades.
// posteriormente recorremos el objeto listando sus propiedades en el navegador


var cuentaCorriente = {

	Nombre: "Pepa",
	Apellido: "Luna",
	Saldo:0,
	Premium:true,

}

document.write("<h1> Ficha de cliente</h1>");

for(var datos in cuentaCorriente){

	document.write(datos+ " : " + cuentaCorriente[datos] + "<br>");
}