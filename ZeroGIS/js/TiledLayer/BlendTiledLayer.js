/**
* BlendTiledLayer
*/
ZeroGIS.TiledLayer.BlendTiledLayer = function (args) {
    ZeroGIS.TiledLayer.apply(this, arguments);
};

ZeroGIS.TiledLayer.BlendTiledLayer.prototype = new TiledLayer();
ZeroGIS.TiledLayer.BlendTiledLayer.prototype.constructor = ZeroGIS.TiledLayer.BlendTiledLayer;

ZeroGIS.TiledLayer.BlendTiledLayer.prototype.getImageUrl = function (level, row, column) {
    ZeroGIS.TiledLayer.prototype.getImageUrl.apply(this, arguments);
    var array = [NokiaTiledLayer, GoogleTiledLayer, OsmTiledLayer];
    var sum = level + row + column;
    var idx = sum % 3;
    var url = array[idx].prototype.getImageUrl.apply(this, arguments);
    return url;
};