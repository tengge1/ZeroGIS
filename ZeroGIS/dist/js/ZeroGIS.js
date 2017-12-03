/**
* ZeroGIS
*/
var ZeroGIS = {

};

/**
* ArcGISTiledLayer
*/
ZeroGIS.TiledLayer.ArcGISTiledLayer = function (args) {
    ZeroGIS.TiledLayer.apply(this, arguments);
    this.service = "";
    if (args) {
        if (args.url) {
            this.service = args.url;
        }
    }
};

ZeroGIS.TiledLayer.ArcGISTiledLayer.prototype = new ZeroGIS.TiledLayer();

ZeroGIS.TiledLayer.ArcGISTiledLayer.prototype.constructor = ZeroGIS.TiledLayer.ArcGISTiledLayer;

ZeroGIS.TiledLayer.ArcGISTiledLayer.prototype.getImageUrl = function (level, row, column) {
    ZeroGIS.TiledLayer.prototype.getImageUrl.apply(this, arguments);
    var url = Kernel.proxy + "?" + this.service + "/tile/" + level + "/" + row + "/" + column;
    return url;
};


/**
* AutonaviTiledLayer
*/
ZeroGIS.TiledLayer.AutonaviTiledLayer = function (args) {
    ZeroGIS.TiledLayer.apply(this, arguments);
};

ZeroGIS.TiledLayer.AutonaviTiledLayer.prototype = new ZeroGIS.TiledLayer();

ZeroGIS.TiledLayer.AutonaviTiledLayer.prototype.constructor = AutonaviTiledLayer;

ZeroGIS.TiledLayer.AutonaviTiledLayer.prototype.getImageUrl = function (level, row, column) {
    ZeroGIS.TiledLayer.prototype.getImageUrl.apply(this, arguments);
    var sum = level + row + column;
    var serverIdx = 1 + sum % 4; //1、2、3、4
    var url = Kernel.proxy + "?//webrd0" + serverIdx + ".is.autonavi.com/appmaptile?x=" + column + "&y=" + row + "&z=" + level + "&lang=zh_cn&size=1&scale=1&style=8";
    return url;
};

