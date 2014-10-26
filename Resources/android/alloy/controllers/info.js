function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function llamar() {
        Ti.Platform.openURL("tel:+911555555");
    }
    function internet() {
        Ti.Platform.openURL("http://videoopen.es");
    }
    function correo() {
        var emailDialog = Titanium.UI.createEmailDialog();
        emailDialog.subject = "Asunto que queramos";
        emailDialog.toRecipients = [ "info@videoopen.es" ];
        emailDialog.messageBody = "Correo de prueba";
        emailDialog.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "info";
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
    $.__views.info = Ti.UI.createWindow({
        layout: "vertical",
        widht: "90%",
        height: "100%",
        id: "info"
    });
    $.__views.info && $.addTopLevelView($.__views.info);
    $.__views.logo = Ti.UI.createImageView({
        top: 5,
        image: "/images/logo.png",
        width: 150,
        height: Titanium.UI.SIZE,
        hires: true,
        id: "logo"
    });
    $.__views.info.add($.__views.logo);
    $.__views.descrip = Ti.UI.createScrollView({
        width: "100%",
        height: 100,
        id: "descrip"
    });
    $.__views.info.add($.__views.descrip);
    $.__views.descript = Ti.UI.createLabel({
        text: "En VideoOpen encontrarás las ultimas películas al mejor precio./nDesde VideoOpen damos acceso a gran cantidad de películas de todas las categorias, desde Ciencia ficción hasta terror.",
        font: {
            fontSize: 15,
            color: "#000"
        },
        id: "descript"
    });
    $.__views.descrip.add($.__views.descript);
    $.__views.padre_botonera = Ti.UI.createView({
        width: Ti.UI.FILL,
        id: "padre_botonera"
    });
    $.__views.info.add($.__views.padre_botonera);
    $.__views.botonera = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "botonera"
    });
    $.__views.padre_botonera.add($.__views.botonera);
    $.__views.llamar = Ti.UI.createButton({
        bottom: 5,
        width: "25%",
        height: "40",
        font: {
            fontSize: 19
        },
        left: 5,
        borderRadius: 10,
        backgroundColor: "#38610B",
        color: "white",
        id: "llamar",
        title: "Llamar"
    });
    $.__views.botonera.add($.__views.llamar);
    llamar ? $.__views.llamar.addEventListener("click", llamar) : __defers["$.__views.llamar!click!llamar"] = true;
    $.__views.internet = Ti.UI.createButton({
        bottom: 5,
        width: "25%",
        height: "40",
        font: {
            fontSize: 19
        },
        left: 5,
        borderRadius: 10,
        backgroundColor: "#F3E2A9",
        color: "black",
        id: "internet",
        title: "URL"
    });
    $.__views.botonera.add($.__views.internet);
    internet ? $.__views.internet.addEventListener("click", internet) : __defers["$.__views.internet!click!internet"] = true;
    $.__views.correo = Ti.UI.createButton({
        bottom: 5,
        width: "25%",
        height: "40",
        font: {
            fontSize: 19
        },
        left: 5,
        borderRadius: 10,
        backgroundColor: "#F6D8CE",
        color: "black",
        id: "correo",
        title: "Correo"
    });
    $.__views.botonera.add($.__views.correo);
    correo ? $.__views.correo.addEventListener("click", correo) : __defers["$.__views.correo!click!correo"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.llamar!click!llamar"] && $.__views.llamar.addEventListener("click", llamar);
    __defers["$.__views.internet!click!internet"] && $.__views.internet.addEventListener("click", internet);
    __defers["$.__views.correo!click!correo"] && $.__views.correo.addEventListener("click", correo);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;