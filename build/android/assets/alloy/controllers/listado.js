function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(e,t){var i=[];o.tvPeliculas.visible=!1,o.tvPeliculas.data=[],o.aiEspera.show(),l.getList(e,t,function(e){if(-1===e)alert("Error al cargar las películas");else{for(var t=0;t<e.movies.length;t++)i[t]=Alloy.createController("filafilm",{info:e.movies[t],i:t}).getView();o.tvPeliculas.data=i}o.aiEspera.hide(),o.tvPeliculas.visible=!0})}function t(t){var i=t.value.trim();if(""!=i){var r="";e(i,r)}}function i(e){var t="http://www.imdb.com/title/tt"+e.alternate_ids.imdb.toString();Ti.Platform.openURL(t)}function r(e){var t=Alloy.createController("detalles",{datos:e}).getView();t.open({animated:!0})}function s(e){var t=e.row.datos;"btIMDB"===e.source.id?i(t):r(t)}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="listado",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var o=this,n={},a={};o.__views.listado=Ti.UI.createWindow({title:"Películas",id:"listado"}),o.__views.listado&&o.addTopLevelView(o.__views.listado),o.__views.sbBuscar=Ti.UI.createSearchBar({top:0,height:43,barColor:"white",showCancel:"true",color:"black",id:"sbBuscar"}),o.__views.listado.add(o.__views.sbBuscar),t?o.__views.sbBuscar.addEventListener("return",t):a["$.__views.sbBuscar!return!buscar"]=!0,o.__views.aiEspera=Ti.UI.createActivityIndicator({top:43,height:Ti.UI.FILL,color:"black",message:"Cargando películas. Espere, por favor.",style:Titanium.UI.ActivityIndicatorStyle.DARK,id:"aiEspera"}),o.__views.listado.add(o.__views.aiEspera),o.__views.tvPeliculas=Ti.UI.createTableView({top:43,minRowHeight:60,maxRowHeight:60,height:Ti.UI.FILL,id:"tvPeliculas"}),o.__views.listado.add(o.__views.tvPeliculas),s?o.__views.tvPeliculas.addEventListener("click",s):a["$.__views.tvPeliculas!click!clickFila"]=!0,n.destroy=function(){},_.extend(o,o.__views),arguments[0]||{};var l=new(require("filmclient").Client);a["$.__views.sbBuscar!return!buscar"]&&o.__views.sbBuscar.addEventListener("return",t),a["$.__views.tvPeliculas!click!clickFila"]&&o.__views.tvPeliculas.addEventListener("click",s),_.extend(o,n)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;