/**
* Scene
*/
WME.Object3D.Scene = function (args) {
    WME.Object3D.Object3DComponents.apply(this, arguments);
};

WME.Object3D.Scene.prototype = new Object3DComponents();

WME.Object3D.Scene.prototype.constructor = WME.Object3D.Scene;
