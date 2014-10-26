function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function cerrar() {
        $.window.close({
            animated: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detalles";
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
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.close = Ti.UI.createButton({
        borderColor: "white",
        color: "black",
        backgroundColor: "white",
        id: "close",
        title: "Cerrar"
    });
    $.__views.window.add($.__views.close);
    cerrar ? $.__views.close.addEventListener("click", cerrar) : __defers["$.__views.close!click!cerrar"] = true;
    $.__views.details = Ti.UI.createScrollView({
        modal: true,
        backgroundColor: "white",
        layout: "vertical",
        left: 10,
        right: 10,
        id: "details"
    });
    $.__views.window.add($.__views.details);
    $.__views.poster = Ti.UI.createImageView({
        width: "60%",
        borderRadius: 10,
        id: "poster"
    });
    $.__views.details.add($.__views.poster);
    $.__views.titulo = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        top: 10,
        color: "black",
        id: "titulo"
    });
    $.__views.details.add($.__views.titulo);
    $.__views.info = Ti.UI.createView({
        width: "80%",
        top: 10,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "info"
    });
    $.__views.details.add($.__views.info);
    $.__views.year = Ti.UI.createLabel({
        right: 10,
        color: "black",
        id: "year"
    });
    $.__views.info.add($.__views.year);
    $.__views.runtime = Ti.UI.createLabel({
        left: 10,
        color: "black",
        id: "runtime"
    });
    $.__views.info.add($.__views.runtime);
    $.__views.sinopsis = Ti.UI.createLabel({
        top: 10,
        color: "black",
        id: "sinopsis"
    });
    $.__views.details.add($.__views.sinopsis);
    $.__views.actors = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "actors"
    });
    $.__views.details.add($.__views.actors);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.poster.image = args.datos.posters.original;
    $.titulo.text = args.datos.title;
    $.year.text = "Año: " + args.datos.year;
    $.runtime.text = "Duración: " + args.datos.runtime + " min";
    $.sinopsis.text = args.datos.synopsis;
    var actors = args.datos.abridged_cast;
    for (var i = 0; i < actors.length; i++) {
        $.actors.add(Ti.UI.createLabel({
            text: actors[i].name,
            font: {
                fontWeight: "bold"
            },
            top: 1,
            color: "black"
        }));
        if (actors[i].characters) {
            var characters = actors[i].characters;
            for (var e = 0; e < characters.length; e++) $.actors.add(Ti.UI.createLabel({
                text: characters[e],
                top: 1,
                color: "black"
            }));
        }
    }
    __defers["$.__views.close!click!cerrar"] && $.__views.close.addEventListener("click", cerrar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;