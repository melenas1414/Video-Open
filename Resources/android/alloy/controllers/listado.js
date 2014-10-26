function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function search(txt, url) {
        var data = [];
        $.tvPeliculas.visible = false;
        $.tvPeliculas.data = [];
        $.aiEspera.show();
        client.getList(txt, url, function(lista) {
            if (-1 === lista) alert("Error al cargar las películas"); else {
                for (var i = 0; i < lista.movies.length; i++) data[i] = Alloy.createController("filafilm", {
                    info: lista.movies[i],
                    i: i
                }).getView();
                $.tvPeliculas.data = data;
            }
            $.aiEspera.hide();
            $.tvPeliculas.visible = true;
        });
    }
    function buscar(e) {
        var txt = e.value.trim();
        if ("" != txt) {
            var url = "";
            search(txt, url);
        }
    }
    function navegarIMDB(datos) {
        var urlIMDB = "http://www.imdb.com/title/tt" + datos.alternate_ids.imdb.toString();
        Ti.Platform.openURL(urlIMDB);
    }
    function mostrarDetalles(datos) {
        var vwDetalles = Alloy.createController("detalles", {
            datos: datos
        }).getView();
        vwDetalles.open({
            animated: true
        });
    }
    function clickFila(e) {
        var datos = e.row.datos;
        "btIMDB" === e.source.id ? navegarIMDB(datos) : mostrarDetalles(datos);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listado";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.listado = Ti.UI.createWindow({
        title: "Películas",
        id: "listado"
    });
    $.__views.listado && $.addTopLevelView($.__views.listado);
    $.__views.sbBuscar = Ti.UI.createSearchBar({
        top: 0,
        height: 43,
        barColor: "white",
        showCancel: "true",
        color: "black",
        id: "sbBuscar"
    });
    $.__views.listado.add($.__views.sbBuscar);
    buscar ? $.__views.sbBuscar.addEventListener("return", buscar) : __defers["$.__views.sbBuscar!return!buscar"] = true;
    $.__views.aiEspera = Ti.UI.createActivityIndicator({
        top: 43,
        height: Ti.UI.FILL,
        color: "black",
        message: "Cargando películas. Espere, por favor.",
        style: Titanium.UI.ActivityIndicatorStyle.DARK,
        id: "aiEspera"
    });
    $.__views.listado.add($.__views.aiEspera);
    $.__views.tvPeliculas = Ti.UI.createTableView({
        top: 43,
        minRowHeight: 60,
        maxRowHeight: 60,
        height: Ti.UI.FILL,
        id: "tvPeliculas"
    });
    $.__views.listado.add($.__views.tvPeliculas);
    clickFila ? $.__views.tvPeliculas.addEventListener("click", clickFila) : __defers["$.__views.tvPeliculas!click!clickFila"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var client = new (require("filmclient").Client)();
    __defers["$.__views.sbBuscar!return!buscar"] && $.__views.sbBuscar.addEventListener("return", buscar);
    __defers["$.__views.tvPeliculas!click!clickFila"] && $.__views.tvPeliculas.addEventListener("click", clickFila);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;