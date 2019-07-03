var miOrco={

	vida:100,
	fuerza:100,
	velocidad:0,
	imagen_idle:"orco_idle.gif",
	imagen_ataque:"orco_ataque.gif",
	imagen_andando:"orco_andando.gif",
	
	atacar:function(){

	orco.setAttribute("src","img/orco_ataque.gif");
	miOrco.fuerza = miOrco.fuerza - 10;
	puntos_fuerza.innerHTML = "Fuerza: " + miOrco.fuerza; 
	},

	idle:function(){

			orco.setAttribute("src","img/orco_idle.gif");

	},

	correr:function(){

		orco.setAttribute("src","img/orco_andando.gif");
		miOrco.velocidad = miOrco.velocidad + 5;
	puntos_velocidad.innerHTML = "Velocidad: " + miOrco.velocidad; 
	
	}
}

var orco = document.getElementById("orco");
var boton_ataque = document.getElementById("boton-ataque");
var boton_idle = document.getElementById("boton-idle");
var boton_correr = document.getElementById("boton-correr");
var puntos_fuerza = document.getElementById("fuerza");
var puntos_velocidad = document.getElementById("velocidad");
var puntos_vida = document.getElementById("vida");

orco.setAttribute("src","img/orco_idle.gif");

boton_ataque.addEventListener("click",miOrco.atacar);
boton_idle.addEventListener("click", miOrco.idle);
boton_correr.addEventListener("click",miOrco.correr);

puntos_vida.innerHTML = "Vida: " + miOrco.vida; 
puntos_fuerza.innerHTML = "Fuerza: " + miOrco.fuerza; 
puntos_velocidad.innerHTML = "Velocidad: " + miOrco.velocidad;