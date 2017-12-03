/**
* Line
*/
ZeroGIS.Object3D.Line = function (position, direction) {
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

ZeroGIS.Object3D.Line.prototype.constructor = ZeroGIS.Object3D.Line;

ZeroGIS.Object3D.Line.prototype.setVertice = function (position) {
    if (!(position instanceof Vertice)) {
        throw "invalid position";
    }
    this.vertice = position.getCopy();
    return this;
};

ZeroGIS.Object3D.Line.prototype.setVector = function (direction) {
    if (!(direction instanceof Vector)) {
        throw "invalid direction";
    }
    this.vector = direction.getCopy();
    this.vector.normalize();
    return this;
};

ZeroGIS.Object3D.Line.prototype.getCopy = function () {
    var lineCopy = new Line(this.vertice, this.vector);
    return lineCopy;
};
