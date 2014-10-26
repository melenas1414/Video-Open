var args = arguments[0] || {};
function cerrar() {
	$.window.close({animated: true});
	
}
$.poster.image=args.datos.posters.original;
$.titulo.text=args.datos.title;
$.year.text="Año: "+ args.datos.year;
$.runtime.text="Duración: "+ args.datos.runtime +" min";
$.sinopsis.text=args.datos.synopsis;
var actors= args.datos.abridged_cast;
for (var i = 0; i < actors.length; i++){
	$.actors.add(Ti.UI.createLabel({
		text: actors[i].name,
		font: {fontWeight: 'bold'},
		top: 1,
		color: "black",
	}));
	if (actors[i].characters){
	var characters = actors[i].characters;
	for (var e = 0; e < characters.length; e++)
	{
		$.actors.add(Ti.UI.createLabel({
			text: characters[e],
			top: 1,
			color: "black",
		}));
		
	}
	}
}