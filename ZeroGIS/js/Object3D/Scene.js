/**
* Scene
*/
ZeroGIS.Object3D.Scene = function (args) {
    ZeroGIS.Object3D.Object3DComponents.apply(this, arguments);
};

ZeroGIS.Object3D.Scene.prototype = new ZeroGIS.Object3D.Object3DComponents();

ZeroGIS.Object3D.Scene.prototype.constructor = ZeroGIS.Object3D.Scene;
