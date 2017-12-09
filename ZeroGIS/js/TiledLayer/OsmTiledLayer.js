/**
* OpenStreetMap
*/
ZeroGIS.TiledLayer.OsmTiledLayer = function (args) {
    TiledLayer.apply(this, arguments);
};

ZeroGIS.TiledLayer.OsmTiledLayer.prototype = new ZeroGIS.TiledLayer();
ZeroGIS.TiledLayer.OsmTiledLayer.prototype.constructor = ZeroGIS.TiledLayer.OsmTiledLayer;

ZeroGIS.TiledLayer.OsmTiledLayer.prototype.getImageUrl = function (level, row, column) {
    ZeroGIS.TiledLayer.prototype.getImageUrl.apply(this, arguments);
    var sum = level + row + column;
    var idx = sum % 3;
    var server = ["a", "b", "c"][idx];
    var url = "//" + server + ".tile.openstreetmap.org/" + level + "/" + column + "/" + row + ".png";
    return url;
};