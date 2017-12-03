/**
* Plan
*/
ZeroGIS.Object3D.Plan = function (A, B, C, D) {
    if (!Utils.isNumber(A)) {
        throw "invalid A";
    }
    if (!Utils.isNumber(B)) {
        throw "invalid B";
    }
    if (!Utils.isNumber(C)) {
        throw "invalid C";
    }
    if (!Utils.isNumber(D)) {
        throw "invalid D";
    }
    this.A = A;
    this.B = B;
    this.C = C;
    this.D = D;
};

ZeroGIS.Object3D.Plan.prototype.constructor = ZeroGIS.Object3D.Plan;

ZeroGIS.Object3D.Plan.prototype.getCopy = function () {
    var planCopy = new ZeroGIS.Object3D.Plan(this.A, this.B, this.C, this.D);
    return planCopy;
};