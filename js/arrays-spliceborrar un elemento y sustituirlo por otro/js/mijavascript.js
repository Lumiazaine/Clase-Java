// Dado un array de 5 frutas borrar la tercera por fresas


var aMisfrutas = new Array();
aMisfrutas[0] = "Melocotones";
aMisfrutas[1] = "Peras";
aMisfrutas[2] = "Manzanas";
aMisfrutas[3] = "Piñas";
aMisfrutas[4] = "Naranjas";

console.log(aMisfrutas);
aMisfrutas.splice(2,1,"Fresas"); // Esto sustituye en la posicion 2  (2,1), a manzanas por fresas
console.log(aMisfrutas);

