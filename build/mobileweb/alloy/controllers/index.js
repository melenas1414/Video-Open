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
    this.__controllerPath = "index";
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
    var __alloyId0 = [];
    $.__views.__alloyId1 = Ti.UI.createWindow({
        id: "__alloyId1"
    });
    $.__views.info = Ti.UI.createTab({
        window: $.__views.__alloyId1,
        id: "info",
        title: "Info"
    });
    __alloyId0.push($.__views.info);
    $.__views.__alloyId2 = Ti.UI.createWindow({
        id: "__alloyId2"
    });
    $.__views.listado = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        id: "listado",
        title: "Listado"
    });
    __alloyId0.push($.__views.listado);
    $.__views.__alloyId3 = Ti.UI.createWindow({
        id: "__alloyId3"
    });
    $.__views.tab3 = Ti.UI.createTab({
        window: $.__views.__alloyId3,
        id: "tab3",
        title: "tab3"
    });
    __alloyId0.push($.__views.tab3);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId0,
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.info.window = Alloy.createController("info").getView();
    $.listado.window = Alloy.createController("listado").getView();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;