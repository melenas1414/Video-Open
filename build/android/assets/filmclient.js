function Client(){this.getList=function(e,t,i){var r,n=Titanium.Network.createHTTPClient();if(n.setTimeout(1e4),""==t)var t="http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=646z6btmesx3mcaaxjtw35x2&q="+e+"&page_limit=10";n.open("GET",t),n.onload=function(){var e=this.responseText;r=JSON.parse(e),i(r)},n.onerror=function(){var e=Ti.UI.createAlertDialog();e.message="Error en conexión",e.title="Atencion",e.show(),i("-1")},n.send()}}exports.Client=Client;