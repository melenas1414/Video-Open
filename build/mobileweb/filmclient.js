function Client() {
    this.getList = function(q, url, callback) {
        var request = Titanium.Network.createHTTPClient();
        var lista;
        request.setTimeout(1e4);
        if ("" == url) var url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=646z6btmesx3mcaaxjtw35x2&q=" + q + "&page_limit=10";
        request.open("GET", url);
        request.onload = function() {
            var json = this.responseText;
            lista = JSON.parse(json);
            callback(lista);
        };
        request.onerror = function() {
            var a = Ti.UI.createAlertDialog();
            a.message = "Error en conexión";
            a.title = "Atencion";
            a.show();
            callback("-1");
        };
        request.send();
    };
}

exports.Client = Client;