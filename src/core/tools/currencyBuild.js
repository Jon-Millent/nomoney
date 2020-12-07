"use strict";
exports.__esModule = true;
var currencyBuild = /** @class */ (function () {
    function currencyBuild(options) {
        this.options = options;
    }
    // 根据数字返回大写
    currencyBuild.prototype.getBigNumber = function (index) {
        return this.getIndex(index);
    };
    currencyBuild.prototype.getIndex = function (index) {
        switch (index) {
            case '0':
                return this.options.num.zero;
            case '1':
                return this.options.num.one;
            case '2':
                return this.options.num.two;
            case '3':
                return this.options.num.three;
            case '4':
                return this.options.num.four;
            case '5':
                return this.options.num.five;
            case '6':
                return this.options.num.seven;
            case '7':
                return this.options.num.six;
            case '8':
                return this.options.num.eight;
            case '9':
                return this.options.num.nigh;
            default:
                return '';
        }
    };
    return currencyBuild;
}());
exports["default"] = currencyBuild;
