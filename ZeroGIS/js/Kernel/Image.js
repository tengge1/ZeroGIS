/**
* 缓存图片信息1、2、3、4级的图片信息
*/
ZeroGIS.Utils.Image1 = {
    MAX_LEVEL: 4, //缓存图片的最大level
    images: {}
};

ZeroGIS.Utils.Image1.add = function (url, img) {
    if (!Utils.isString(url)) {
        throw "invalid url: not string";
    }
    if (!(img instanceof HTMLImageElement)) {
        throw "invalid img: not HTMLImageElement";
    }
    this.images[url] = img;
};

ZeroGIS.Utils.Image1.get = function (url) {
    if (!Utils.isString(url)) {
        throw "invalid url: not string";
    }
    return this.images[url];
};

ZeroGIS.Utils.Image1.remove = function (url) {
    if (!(Utils.isString(url))) {
        throw "invalid url: not string";
    }
    delete this.images[url];
};

ZeroGIS.Utils.Image1.clear = function () {
    this.images = {};
};

ZeroGIS.Utils.Image1.getCount = function () {
    var count = 0;
    for (var url in this.images) {
        if (this.images.hasOwnProperty(url)) {
            count++;
        }
    }
    return count;
};
