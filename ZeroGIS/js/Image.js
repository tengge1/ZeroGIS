/**
* 缓存图片信息1、2、3、4级的图片信息
*/
ZeroGIS.Image1 = {
    MAX_LEVEL: 4, //缓存图片的最大level
    images: {}
};

ZeroGIS.Image1.add = function (url, img) {
    if (!ZeroGIS.Utils.isString(url)) {
        throw "invalid url: not string";
    }
    if (!(img instanceof HTMLImageElement)) {
        throw "invalid img: not HTMLImageElement";
    }
    this.images[url] = img;
};

ZeroGIS.Image1.get = function (url) {
    if (!ZeroGIS.Utils.isString(url)) {
        throw "invalid url: not string";
    }
    return this.images[url];
};

ZeroGIS.Image1.remove = function (url) {
    if (!(ZeroGIS.Utils.isString(url))) {
        throw "invalid url: not string";
    }
    delete this.images[url];
};

ZeroGIS.Image1.clear = function () {
    this.images = {};
};

ZeroGIS.Image1.getCount = function () {
    var count = 0;
    for (var url in this.images) {
        if (this.images.hasOwnProperty(url)) {
            count++;
        }
    }
    return count;
};
