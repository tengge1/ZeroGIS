ZeroGIS.TileGrid = function (level, row, column) {
    if (!Utils.isNonNegativeInteger(level)) {
        throw "invalid level";
    }
    if (!Utils.isNonNegativeInteger(row)) {
        throw "invalid row";
    }
    if (!Utils.isNonNegativeInteger(column)) {
        throw "invalid column";
    }
    this.level = level;
    this.row = row;
    this.column = column;
};

ZeroGIS.TileGrid.prototype._requireMath = function () {
    return require("world/Math");
};

ZeroGIS.TileGrid.prototype.equals = function (other) {
    return other instanceof ZeroGIS.TileGrid && this.level == other.level && this.row == other.row && this.column == other.column;
};

ZeroGIS.TileGrid.prototype.getLeft = function () {
    var MathUtils = this._requireMath();
    return MathUtils.getTileGridByBrother(this.level, this.row, this.column, MathUtils.LEFT);
};

ZeroGIS.TileGrid.prototype.getRight = function () {
    var MathUtils = this._requireMath();
    return MathUtils.getTileGridByBrother(this.level, this.row, this.column, MathUtils.RIGHT);
};

ZeroGIS.TileGrid.prototype.getTop = function () {
    var MathUtils = this._requireMath();
    return MathUtils.getTileGridByBrother(this.level, this.row, this.column, MathUtils.TOP);
};

ZeroGIS.TileGrid.prototype.getBottom = function () {
    var MathUtils = this._requireMath();
    return MathUtils.getTileGridByBrother(this.level, this.row, this.column, MathUtils.BOTTOM);
};

ZeroGIS.TileGrid.prototype.getParent = function () {
    var MathUtils = this._requireMath();
    return MathUtils.getTileGridAncestor(this.level - 1, this.level, this.row, this.column);
};

ZeroGIS.TileGrid.prototype.getAncestor = function (ancestorLevel) {
    var MathUtils = this._requireMath();
    return MathUtils.getTileGridAncestor(ancestorLevel, this.level, this.row, this.column);
};