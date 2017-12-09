var globe;

function start() {
    var canvas = document.getElementById("container");
    globe = new ZeroGIS.Globe(canvas);
    var selector = document.getElementById("mapSelector");
    selector.onchange = changeTiledLayer;
    changeTiledLayer();
}

function changeTiledLayer() {
    var mapSelector = document.getElementById("mapSelector");
    mapSelector.blur();
    var newTiledLayer = null;
    var args = null;
    var value = mapSelector.value;
    switch (value) {
        case "google":
            newTiledLayer = new ZeroGIS.TiledLayer.GoogleTiledLayer();
            break;
        case "bing":
            newTiledLayer = new ZeroGIS.TiledLayer.BingTiledLayer();
            break;
        case "osm":
            newTiledLayer = new ZeroGIS.TiledLayer.OsmTiledLayer();
            break;
        case "soso":
            newTiledLayer = new ZeroGIS.TiledLayer.SosoTiledLayer();
            break;
        case "tianditu":
            newTiledLayer = new ZeroGIS.TiledLayer.TiandituTiledLayer();
            break;
        default:
            break;
    }

    if (newTiledLayer) {
        globe.setTiledLayer(newTiledLayer);
    }
}

window.onload = function () {
    start();
};