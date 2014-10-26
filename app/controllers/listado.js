var args = arguments[0] || {};
var client = new (require("filmclient")).Client();


function search (txt, url) {
	var data = [];
	$.tvPeliculas.visible = false;
	$.tvPeliculas.data = [];
	
  	$.aiEspera.show();
  	//Ti.API.info('prueba');
	client.getList(txt,url, function(lista) {
  		if (lista === -1) {
  			
  			alert("Error al cargar las películas");
  		}
  		else {
  			for(var i = 0; i < lista.movies.length; i++) {
  						data[i]=Alloy.createController("filafilm", {info: lista.movies[i], i: i}).getView();
  						//Ti.API.info(JSON.stringify(lista.movies[i]));
  			}
  			$.tvPeliculas.data = data;
  		};
  		//$.tvfilms.Alloy.createController("menufilms", {url: list.links}).getView();
  		$.aiEspera.hide();
		$.tvPeliculas.visible = true;
  	}); 
}
function buscar (e) {
	var txt = e.value.trim();
	  if (txt != '')
	  {
	  	var url = '';
	  	search(txt,url);
	  	
	  };
};
function navegarIMDB(datos) {
	
	var urlIMDB = 'http://www.imdb.com/title/tt' + datos.alternate_ids.imdb.toString();
	Ti.Platform.openURL(urlIMDB);
}
function mostrarDetalles(datos) {
	var vwDetalles = Alloy.createController('detalles', { datos: datos }).getView();
	vwDetalles.open({animated: true});
}
function clickFila(e) {
	var datos = (OS_IOS) ? e.rowData.datos : e.row.datos ;
	if(e.source.id === "btIMDB") {
		navegarIMDB(datos);
	} else {

		mostrarDetalles(datos);
	}
}
