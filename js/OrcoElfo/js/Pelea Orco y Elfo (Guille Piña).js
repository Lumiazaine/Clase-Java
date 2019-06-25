
var fuerzaOrco; //Valor de la estadistica "fuerza" del Orco
	
var fuerzaElfo; //Valor de la estadistica "fuerza" del Elfo

var decisionPocion = 0;

//var numeroAleatorio;

//Entrada de datos 
fuerzaOrco = prompt ("Introduce la fuerza del Orco");
fuerzaElfo = prompt ("Introduce la fuerza del Elfo");

//ya que prompt nos devuelve una string, necesito pasar la string a number
fuerzaOrco = Number (fuerzaOrco);
fuerzaElfo = Number (fuerzaElfo);

//El elfo se encuentra con una pocion

do{
	decisionPocion = prompt("El elfo se ha encontrado con una pocion, ¿que hacemos?\n" + 
	"1- Nos la bebemos\n" + 
	"2- La dejamos");
} while (decisionPocion != "1" && decisionPocion != "2")

//La pocion es aleatoria. Puede ser buena, sumando asi X puntos de fuerza, o puede ser negativa restando la misma cantidad 


//document.write(numeroAleatorio)

if (decisionPocion == 1) {

numeroAleatorio = Math.random();
	
	if (numeroAleatorio < 0.5 && decisionPocion == 1) {
		fuerzaElfo = fuerzaElfo + 5; alert("El elfo suma 5 de fuerza")}
		else if (numeroAleatorio >= 0.5 && decisionPocion == 1) {
			fuerzaElfo = fuerzaElfo - 5; alert("El elfo pierde 5 de fuerza")}
			else if (decisionPocion == 2) {"la dejas ahí"}
}


if (fuerzaOrco == fuerzaElfo) {alert("No gana nadie")}
	else if (fuerzaOrco > fuerzaElfo) {alert("Gana el Orco")}
	else {alert("Gana el Elfo")}