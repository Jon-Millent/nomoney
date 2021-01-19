"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var currencyBuild = /** @class */ (function () {
    function currencyBuild(options) {
        this.options = options;
    }
    Object.defineProperty(currencyBuild.prototype, "num", {
        get: function () {
            return this.options.num;
        },
        enumerable: false,
        configurable: true
    });
    // 根据数字返回大写
    currencyBuild.prototype.getBigNumber = function (index) {
        return this.getIndex(index);
    };
    currencyBuild.prototype.getBigNumberFormString = function (currency) {
        var str = "";
        for (var i = 0; i < currency.length; i++) {
            str += this.getIndex(currency[i]);
        }
        return str;
    };
    currencyBuild.prototype.getIndex = function (index) {
        switch (index) {
            case "0":
                return this.options.num.zero;
            case "1":
                return this.options.num.one;
            case "2":
                return this.options.num.two;
            case "3":
                return this.options.num.three;
            case "4":
                return this.options.num.four;
            case "5":
                return this.options.num.five;
            case "6":
                return this.options.num.six;
            case "7":
                return this.options.num.seven;
            case "8":
                return this.options.num.eight;
            case "9":
                return this.options.num.nigh;
            default:
                return "";
        }
    };
    currencyBuild.prototype.getDoubleIndex = function (index) {
        switch (index) {
            case "0":
                return this.options.num.jiao;
            case "1":
                return this.options.num.fen;
            default:
                return "";
        }
    };
    // 根据索引返回单位
    currencyBuild.prototype.getUnitByIndex = function (repeatIndex, numIndex) {
        var nowUnit = this.options.group.unit[repeatIndex];
        if (numIndex === 0) {
            return {
                unit: nowUnit,
                base: "",
            };
        }
        else {
            return {
                unit: nowUnit,
                base: this.options.group.base[numIndex - 1],
            };
        }
    };
    // 获取最大解析字符串范围
    currencyBuild.prototype.getMaxLength = function () {
        return this.options.group.unit.length * 4 - 4;
    };
    return currencyBuild;
}());
exports.default = currencyBuild;
//# sourceMappingURL=currencyBuild.js.map