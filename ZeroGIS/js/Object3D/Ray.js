ZeroGIS.Object3D.Ray = function (position, direction) {
    if (!(position instanceof Vertice)) {
        throw "invalid position";
    }
    if (!(direction instanceof Vector)) {
        throw "invalid direction";
    }
    this.vertice = position.getCopy();
    this.vector = direction.getCopy();
    this.vector.normalize();
};

ZeroGIS.Object3D.Ray.prototype.constructor = ZeroGIS.Object3D.Ray;

ZeroGIS.Object3D.Ray.prototype.setVertice = function (position) {
    if (!(position instanceof Vertice)) {
        throw "invalid position";
    }
    this.vertice = position.getCopy();
    return this;
};

ZeroGIS.Object3D.Ray.prototype.setVector = function (direction) {
    if (!(direction instanceof Vector)) {
        throw "invalid direction";
    }
    this.vector = direction.getCopy();
    this.vector.normalize();
    return this;
};

ZeroGIS.Object3D.Ray.prototype.getCopy = function () {
    var rayCopy = new ZeroGIS.Object3D.Ray(this.vertice, this.vector);
    return rayCopy;
};

ZeroGIS.Object3D.Ray.prototype.rotateVertice = function (vertice) {

};
