"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cn_1 = require("./ruls/cn");
var string_help_1 = require("./lib/string-help");
var currency_types_1 = require("./types/currency-types");
var currencyBuild_1 = require("./tools/currencyBuild");
var DefaultOptions = /** @class */ (function () {
    function DefaultOptions() {
    }
    DefaultOptions.currencyStringifyConfig = function (config) {
        if (config === void 0) { config = {}; }
        return Object.assign({
            lang: currency_types_1.Language.zh_cn,
            isCurrency: true,
        }, config);
    };
    return DefaultOptions;
}());
var Currency = /** @class */ (function () {
    function Currency() {
    }
    Object.defineProperty(Currency, "Language", {
        get: function () {
            return currency_types_1.Language;
        },
        enumerable: false,
        configurable: true
    });
    // 转换数字货币或者字符串货币 为大写
    Currency.stringify = function (rmb, config) {
        if (config === void 0) { config = {}; }
        var inputConfig = DefaultOptions.currencyStringifyConfig(config);
        var cnCurrency = new currencyBuild_1.default((0, cn_1.default)(inputConfig.lang));
        var yuan = cnCurrency.num.yuan;
        var full = cnCurrency.num.full;
        if (!rmb && typeof rmb !== "number") {
            if (inputConfig.isCurrency) {
                return cnCurrency.num.zero + yuan + full;
            }
            return cnCurrency.num.zero;
        }
        if (rmb.toString().length > cnCurrency.getMaxLength()) {
            console.warn("maximum length is" + cnCurrency.getMaxLength().toString());
            return "";
        }
        if (!Currency.isValid(rmb)) {
            console.warn("number or string that does not meet the rules");
            return "";
        }
        if (string_help_1.default.getIsZeroString(rmb.toString())) {
            if (inputConfig.isCurrency) {
                return cnCurrency.num.zero + cnCurrency.num.yuan + cnCurrency.num.full;
            }
            return cnCurrency.num.zero;
        }
        var parseLine = string_help_1.default.splitMoney(rmb);
        var betterMoon = string_help_1.default.formatMoon(parseLine.intArea, cnCurrency);
        if (inputConfig.isCurrency) {
            if (parseLine.doubleArea) {
                var doubleBack = string_help_1.default.formatSun(parseLine.doubleArea, betterMoon, cnCurrency);
                // 如果有小数
                if (doubleBack) {
                    if (betterMoon) {
                        return (betterMoon ? betterMoon + yuan : "") + doubleBack;
                    }
                    return (betterMoon ? betterMoon + yuan : "") + doubleBack + full;
                }
                else {
                    // 没有小数
                    if (betterMoon) {
                        return (betterMoon ? betterMoon + yuan : "") + full;
                    }
                    return cnCurrency.num.zero + yuan + full;
                }
            }
            else {
                return betterMoon ? betterMoon + yuan + full : "";
            }
        }
        else {
            var point = cnCurrency.num.point;
            if (parseLine.doubleArea) {
                var doubleBack = cnCurrency.getBigNumberFormString(parseLine.doubleArea);
                if (doubleBack) {
                    if (!inputConfig.isCurrency && !betterMoon) {
                        return cnCurrency.num.zero + point + doubleBack;
                    }
                    else {
                        return (betterMoon ? betterMoon + point : "") + doubleBack;
                    }
                }
                else {
                    return betterMoon;
                }
            }
            else {
                return betterMoon;
            }
        }
    };
    // 检查是否是符合规则的
    Currency.isValid = function (rmb) {
        return string_help_1.default.isNumber(rmb);
    };
    // 给出字符串或者数字，返回无格式的数字大写
    Currency.capital = function (rmb, config) {
        if (config === void 0) { config = {}; }
        if (!rmb) {
            console.warn("please pass in the correct parameters, support numbers or strings");
            return "";
        }
        var inputConfig = DefaultOptions.currencyStringifyConfig(config);
        var cnCurrency = new currencyBuild_1.default((0, cn_1.default)(inputConfig.lang));
        if (!Currency.isValid(rmb)) {
            console.warn("number or string that does not meet the rules");
            return "";
        }
        return cnCurrency.getBigNumberFormString(rmb.toString());
    };
    return Currency;
}());
exports.default = Currency;
//# sourceMappingURL=currency.js.map