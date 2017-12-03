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
