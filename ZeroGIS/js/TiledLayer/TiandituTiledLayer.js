/**
* TiandituTiledLayer
*/
ZeroGIS.TiledLayer.TiandituTiledLayer = function (args) {
    ZeroGIS.TiledLayer.apply(this, arguments);
};

ZeroGIS.TiledLayer.TiandituTiledLayer.prototype = new ZeroGIS.TiledLayer();

ZeroGIS.TiledLayer.TiandituTiledLayer.prototype.constructor = ZeroGIS.TiledLayer.TiandituTiledLayer;

ZeroGIS.TiledLayer.TiandituTiledLayer.prototype.getImageUrl = function (level, row, column) {
    ZeroGIS.TiledLayer.prototype.getImageUrl.apply(this, arguments);
    var url = "";
    var sum = level + row + column;
    var serverIdx = sum % 8;
    url = "//t" + serverIdx + ".tianditu.com/DataServer?T=vec_w&x=" + column + "&y=" + row + "&l=" + level;
    return url;
};
