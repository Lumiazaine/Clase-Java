// Dado un array con 4 flores
// eliminar la última flor.
// sacar el nombre de la flor eliminada en un alert.
// pop por defecto borra el último valor
var florEliminada
var aFlores = ["Tulipanes","Margaritas","Rosas","Violetas"];
console.log(aFlores);
florEliminada = aFlores.pop();
console.log(aFlores);
console.log(florEliminada);
alert("Se ha borrado: " + florEliminada);