function ucfirst(e){return e?e[0].toUpperCase()+e.substr(1):e}function addNamespace(e){return(CONST.IMPLICIT_NAMESPACES[e]||CONST.NAMESPACE_DEFAULT)+"."+e}function processStyle(e,t,i,r,n){r=r||{},r.classes=i,t.apiName&&(r.apiName=t.apiName),t.id&&(r.id=t.id),t.applyProperties(exports.createStyle(e,r,n)),t.classes=i}function isTabletFallback(){return Math.min(Ti.Platform.displayCaps.platformHeight,Ti.Platform.displayCaps.platformWidth)>=700}function deepExtend(){var e,t,i,r,n,o,a=arguments[0]||{},s=1,l=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[1]||{},s=2),"object"==typeof a||_.isFunction(a)||(a={});l>s;s++)if(e=arguments[s],null!=e){"string"==typeof e&&(e=e.split(""));for(t in e)i=a[t],r=e[t],a!==r&&(c&&r&&(_.isObject(r)&&!_.has(r,"apiName")||(n=_.isArray(r)))&&!r.colors?(n?(n=!1,o=i&&_.isArray(i)?i:[]):o=_.isDate(r)?new Date(r.valueOf()):i&&_.isObject(i)?i:{},a[t]=deepExtend(c,o,r)):"undefined"!=typeof r?a[t]=r:r.colors&&(a[t]=r))}return a}var _=require("alloy/underscore")._,Backbone=require("alloy/backbone"),CONST=require("alloy/constants");exports.version="1.5.1",exports._=_,exports.Backbone=Backbone;var DEFAULT_WIDGET="widget",TI_VERSION=Ti.version,MW320_CHECK=!1,IDENTITY_TRANSFORM=Ti.UI.create2DMatrix(),RESET={bottom:null,left:null,right:null,top:null,height:null,width:null,shadowColor:null,shadowOffset:null,backgroundImage:null,backgroundRepeat:null,center:null,layout:null,backgroundSelectedColor:null,backgroundSelectedImage:null,opacity:1,touchEnabled:!0,enabled:!0,horizontalWrap:!0,zIndex:0,backgroundColor:"transparent",font:null,visible:!0,color:"#000",transform:IDENTITY_TRANSFORM,backgroundGradient:null,borderColor:null,borderRadius:null,borderWidth:null};RESET=_.extend(RESET,{backgroundDisabledColor:null,backgroundDisabledImage:null,backgroundFocusedColor:null,backgroundFocusedImage:null,focusable:!1,keepScreenOn:!1}),exports.M=function(e,t,i){var r,n=(t||{}).config||{},o=n.adapter||{},a={},s={};o.type?(r=require("alloy/sync/"+o.type),a.sync=function(e,t,i){r.sync(e,t,i)}):a.sync=function(e,t){Ti.API.warn("Execution of "+e+"#sync() function on a model that does not support persistence"),Ti.API.warn("model: "+JSON.stringify(t.toJSON()))},a.defaults=n.defaults,i&&(s.migrations=i),r&&_.isFunction(r.beforeModelCreate)&&(n=r.beforeModelCreate(n,e)||n);var l=Backbone.Model.extend(a,s);return l.prototype.config=n,_.isFunction(t.extendModel)&&(l=t.extendModel(l)||l),r&&_.isFunction(r.afterModelCreate)&&r.afterModelCreate(l,e),l},exports.C=function(e,t,i){var r,n={model:i},o=(i?i.prototype.config:{})||{};o.adapter&&o.adapter.type?(r=require("alloy/sync/"+o.adapter.type),n.sync=function(e,t,i){r.sync(e,t,i)}):n.sync=function(e,t){Ti.API.warn("Execution of "+e+"#sync() function on a collection that does not support persistence"),Ti.API.warn("model: "+JSON.stringify(t.toJSON()))};var a=Backbone.Collection.extend(n);return a.prototype.config=o,_.isFunction(t.extendCollection)&&(a=t.extendCollection(a)||a),r&&_.isFunction(r.afterCollectionCreate)&&r.afterCollectionCreate(a),a},exports.UI={},exports.UI.create=function(controller,apiName,opts){opts=opts||{};var baseName,ns,parts=apiName.split(".");if(1===parts.length)baseName=apiName,ns=opts.ns||CONST.IMPLICIT_NAMESPACES[baseName]||CONST.NAMESPACE_DEFAULT;else{if(!(parts.length>1))throw"Alloy.UI.create() failed: No API name was given in the second parameter";baseName=parts[parts.length-1],ns=parts.slice(0,parts.length-1).join(".")}opts.apiName=ns+"."+baseName,baseName=baseName[0].toUpperCase()+baseName.substr(1);var style=exports.createStyle(controller,opts);return eval(ns)["create"+baseName](style)},exports.createStyle=function(e,t,i){var r,n;if(!t)return{};r=_.isArray(t.classes)?t.classes.slice(0):_.isString(t.classes)?t.classes.split(/\s+/):[],n=t.apiName,n&&-1===n.indexOf(".")&&(n=addNamespace(n));var o;o=require(e&&_.isObject(e)?"alloy/widgets/"+e.widgetId+"/styles/"+e.name:"alloy/styles/"+e);var a,s,l={};for(a=0,s=o.length;s>a;a++){var c=o[a],u=c.key;if(c.isApi&&-1===u.indexOf(".")&&(u=(CONST.IMPLICIT_NAMESPACES[u]||CONST.NAMESPACE_DEFAULT)+"."+u),c.isId&&t.id&&c.key===t.id||c.isClass&&_.contains(r,c.key));else{if(!c.isApi)continue;if(-1===c.key.indexOf(".")&&(c.key=addNamespace(c.key)),c.key!==n)continue}c.queries&&c.queries.formFactor&&!Alloy[c.queries.formFactor]||deepExtend(!0,l,c.style)}var d=_.omit(t,[CONST.CLASS_PROPERTY,CONST.APINAME_PROPERTY]);return deepExtend(!0,l,d),l[CONST.CLASS_PROPERTY]=r,l[CONST.APINAME_PROPERTY]=n,MW320_CHECK&&delete l[CONST.APINAME_PROPERTY],i?_.defaults(l,i):l},exports.addClass=function(e,t,i,r){if(!i)return void(r&&(MW320_CHECK&&delete r.apiName,t.applyProperties(r)));var n=t[CONST.CLASS_PROPERTY]||[],o=n.length;i=_.isString(i)?i.split(/\s+/):i;var a=_.union(n,i||[]);return o===a.length?void(r&&(MW320_CHECK&&delete r.apiName,t.applyProperties(r))):void processStyle(e,t,a,r)},exports.removeClass=function(e,t,i,r){i=i||[];var n=t[CONST.CLASS_PROPERTY]||[],o=n.length;if(!o||!i.length)return void(r&&(MW320_CHECK&&delete r.apiName,t.applyProperties(r)));i=_.isString(i)?i.split(/\s+/):i;var a=_.difference(n,i);return o===a.length?void(r&&(MW320_CHECK&&delete r.apiName,t.applyProperties(r))):void processStyle(e,t,a,r,RESET)},exports.resetClass=function(e,t,i,r){i=i||[],i=_.isString(i)?i.split(/\s+/):i,processStyle(e,t,i,r,RESET)},exports.createWidget=function(e,t,i){return"undefined"!=typeof t&&null!==t&&_.isObject(t)&&!_.isString(t)&&(i=t,t=DEFAULT_WIDGET),new(require("alloy/widgets/"+e+"/controllers/"+(t||DEFAULT_WIDGET)))(i)},exports.createController=function(e,t){return new(require("alloy/controllers/"+e))(t)},exports.createModel=function(e,t){return new(require("alloy/models/"+ucfirst(e)).Model)(t)},exports.createCollection=function(e,t){return new(require("alloy/models/"+ucfirst(e)).Collection)(t)},exports.isTablet=function(){var e=Ti.Platform.Android.physicalSizeCategory;return e===Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_LARGE||e===Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_XLARGE}(),exports.isHandheld=!exports.isTablet,exports.Globals={},exports.Models={},exports.Models.instance=function(e){return exports.Models[e]||(exports.Models[e]=exports.createModel(e))},exports.Collections={},exports.Collections.instance=function(e){return exports.Collections[e]||(exports.Collections[e]=exports.createCollection(e))},exports.CFG=require("alloy/CFG"),exports.Android={},exports.Android.menuItemCreateArgs=["itemId","groupId","title","order","actionView","checkable","checked","enabled","icon","showAsAction","titleCondensed","visible"];