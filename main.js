function calcular()
{
	var puntosSquad = document.getElementById("puntosSquad").value;
	var maxPuntos = document.getElementById("maxPuntos").value;
	var porcentajeSquad = (100 * puntosSquad) / maxPuntos;

	if(porcentajeSquad >= 80)
	{
		document.getElementById("salida").innerHTML = "Muy bien squad!";
	}else{
		document.getElementById("salida").innerHTML = "Pueden hacerlo mejor";
	}
}