function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "filafilm";
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
    $.__views.fila = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        id: "fila"
    });
    $.__views.fila && $.addTopLevelView($.__views.fila);
    $.__views.info = Ti.UI.createView({
        layout: "horizontal",
        right: 60,
        width: Ti.UI.FILL,
        height: "100%",
        id: "info"
    });
    $.__views.fila.add($.__views.info);
    $.__views.poster = Ti.UI.createImageView({
        left: 5,
        top: 5,
        width: 33,
        height: 50,
        borderRadius: 5,
        id: "poster"
    });
    $.__views.info.add($.__views.poster);
    $.__views.titulo = Ti.UI.createLabel({
        verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        width: Ti.UI.FILL,
        height: 50,
        top: 5,
        left: 5,
        textAlign: "left",
        font: {
            fontSize: 12
        },
        color: "black",
        id: "titulo"
    });
    $.__views.info.add($.__views.titulo);
    $.__views.btIMDB = Ti.UI.createButton({
        backgroundImage: "/images/globe-48.png",
        top: 15,
        right: 15,
        width: 30,
        height: 30,
        id: "btIMDB"
    });
    $.__views.fila.add($.__views.btIMDB);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.i % 2 && ($.fila.backgroundColor = "#DDD");
    $.fila.datos = args.info;
    $.poster.image = args.info.posters.thumbnail;
    $.titulo.text = args.info.title;
    args.info.alternate_ids && args.info.alternate_ids.imdb ? $.btIMDB.datos = args.info.alternate_ids.imdb : $.btIMDB.visible = false;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;