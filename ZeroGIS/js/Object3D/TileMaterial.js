/**
* TileMaterial
*/
ZeroGIS.Object3D.TileMaterial = function (args) {
    if (args) {
        if (!args.image && typeof args.url == "string") {
            var tileImage = ZeroGIS.Image.get(args.url);
            if (tileImage) {
                args.image = tileImage;
                delete args.url;
            }
        }
        this.level = typeof args.level == "number" && args.level >= 0 ? args.level : 20;
        ZeroGIS.Object3D.TextureMaterial.apply(this, arguments);
    }
};

ZeroGIS.Object3D.TileMaterial.prototype = new ZeroGIS.Object3D.TextureMaterial();

ZeroGIS.Object3D.TileMaterial.prototype.constructor = ZeroGIS.Object3D.TileMaterial;

ZeroGIS.Object3D.TileMaterial.prototype.onLoad = function (event) {
    if (this.level <= ZeroGIS.Image.MAX_LEVEL) {
        ZeroGIS.Image.add(this.image.src, this.image);
    }
    ZeroGIS.Object3D.TextureMaterial.prototype.onLoad.apply(this, arguments);
};