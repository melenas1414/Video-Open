function __processArg(t,e){var i=null;return t&&(i=t[e]||null,delete t[e]),i}function Controller(){function t(){e.window.close({animated:!0})}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="detalles",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var e=this,i={},r={};e.__views.window=Ti.UI.createWindow({backgroundColor:"white",layout:"vertical",id:"window"}),e.__views.window&&e.addTopLevelView(e.__views.window),e.__views.close=Ti.UI.createButton({borderColor:"white",color:"black",backgroundColor:"white",id:"close",title:"Cerrar"}),e.__views.window.add(e.__views.close),t?e.__views.close.addEventListener("click",t):r["$.__views.close!click!cerrar"]=!0,e.__views.details=Ti.UI.createScrollView({modal:!0,backgroundColor:"white",layout:"vertical",left:10,right:10,id:"details"}),e.__views.window.add(e.__views.details),e.__views.poster=Ti.UI.createImageView({width:"60%",borderRadius:10,id:"poster"}),e.__views.details.add(e.__views.poster),e.__views.titulo=Ti.UI.createLabel({font:{fontSize:20,fontWeight:"bold"},top:10,color:"black",id:"titulo"}),e.__views.details.add(e.__views.titulo),e.__views.info=Ti.UI.createView({width:"80%",top:10,layout:"horizontal",height:Ti.UI.SIZE,id:"info"}),e.__views.details.add(e.__views.info),e.__views.year=Ti.UI.createLabel({right:10,color:"black",id:"year"}),e.__views.info.add(e.__views.year),e.__views.runtime=Ti.UI.createLabel({left:10,color:"black",id:"runtime"}),e.__views.info.add(e.__views.runtime),e.__views.sinopsis=Ti.UI.createLabel({top:10,color:"black",id:"sinopsis"}),e.__views.details.add(e.__views.sinopsis),e.__views.actors=Ti.UI.createView({layout:"vertical",height:Ti.UI.SIZE,id:"actors"}),e.__views.details.add(e.__views.actors),i.destroy=function(){},_.extend(e,e.__views);var s=arguments[0]||{};e.poster.image=s.datos.posters.original,e.titulo.text=s.datos.title,e.year.text="Año: "+s.datos.year,e.runtime.text="Duración: "+s.datos.runtime+" min",e.sinopsis.text=s.datos.synopsis;for(var n=s.datos.abridged_cast,o=0;o<n.length;o++)if(e.actors.add(Ti.UI.createLabel({text:n[o].name,font:{fontWeight:"bold"},top:1,color:"black"})),n[o].characters)for(var a=n[o].characters,l=0;l<a.length;l++)e.actors.add(Ti.UI.createLabel({text:a[l],top:1,color:"black"}));r["$.__views.close!click!cerrar"]&&e.__views.close.addEventListener("click",t),_.extend(e,i)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;