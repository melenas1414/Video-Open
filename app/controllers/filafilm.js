var args = arguments[0] || {};
if(args.i % 2) {
	$.fila.backgroundColor = "#DDD";	
}
$.fila.datos = args.info;
$.poster.image = args.info.posters.thumbnail;
$.titulo.text = args.info.title;

if(!args.info.alternate_ids || !args.info.alternate_ids.imdb) {
	$.btIMDB.visible = false;
}
else 
{
	$.btIMDB.datos=args.info.alternate_ids.imdb;
	
}
