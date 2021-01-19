"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringHelp = /** @class */ (function () {
    function StringHelp() {
    }
    // 货币分组
    StringHelp.splitMoney = function (currency) {
        var split = StringHelp.getBeautifulString(currency.toString()).split(".");
        // 分割
        var intAreaStr = [];
        var intStr = split[0];
        var every = 4;
        var splitRepeat = Math.floor(intStr.length / every);
        var splitRepeatLeft = intStr.length % every;
        if (splitRepeatLeft > 0) {
            intAreaStr.push(intStr.substring(0, splitRepeatLeft));
        }
        for (var index = 0; index < splitRepeat; index++) {
            var start = splitRepeatLeft + index * every;
            intAreaStr.push(intStr.substring(start, start + every));
        }
        return {
            intArea: intAreaStr,
            doubleArea: split[1] || "",
        };
    };
    // 对分组的整形货币进行格式化
    StringHelp.formatMoon = function (currency, cn) {
        var moon = "";
        var nextAppendZero = false; // 下一位是否补零
        currency.forEach(function (currencyItem, currencyIndex) {
            var currencyUnitIndex = currency.length - currencyIndex - 1; // unit 等级
            var hasAppendUnit = false; // 是否补上单位
            var targetAppendUnit = ""; // 补单位
            for (var moneyIndex = 0; moneyIndex < currencyItem.length; moneyIndex++) {
                var moneyLeave = currencyItem.length - moneyIndex - 1;
                var moneyNowItem = currencyItem[moneyIndex];
                var moneyNextItem = currencyItem[moneyIndex + 1];
                var unit = cn.getUnitByIndex(currencyUnitIndex, moneyLeave);
                var bigValue = cn.getBigNumber(moneyNowItem);
                var isZero = moneyNowItem === "0";
                var isLast = moneyIndex === currencyItem.length - 1;
                if (!targetAppendUnit) {
                    targetAppendUnit = unit.unit;
                }
                if (nextAppendZero) {
                    if (!isZero) {
                        moon += cn.num.zero;
                    }
                    nextAppendZero = false;
                }
                if (moneyNextItem) {
                    if (isZero) {
                        // 有下一个单位就要考虑
                        // 下一个单位不是0，就补上去零
                        if (moneyNextItem) {
                            if (moneyNextItem !== "0") {
                                moon += cn.num.zero;
                            }
                        }
                    }
                    else {
                        moon += bigValue + unit.base;
                    }
                }
                else {
                    // 没有就不考虑
                    if (isZero) {
                        // 有下一个单位就要考虑
                        // 下一个单位不是0，就补上去零
                        if (moneyNextItem) {
                            if (moneyNextItem !== "0") {
                                moon += cn.num.zero;
                            }
                        }
                    }
                    else {
                        moon += bigValue + unit.base + unit.unit;
                        hasAppendUnit = true;
                    }
                }
                // 最后一位补单位
                if (isLast) {
                    nextAppendZero = isZero;
                    if (!hasAppendUnit && targetAppendUnit && currencyItem !== "0000") {
                        moon += targetAppendUnit;
                    }
                }
            }
        });
        return moon;
    };
    // 对小数型格式化
    StringHelp.formatSun = function (currency, intCurrency, cn) {
        currency = currency.substr(0, 2);
        if (currency === "00" || currency === "0") {
            return "";
        }
        if (currency.length === 2) {
            if (currency[0] === "0") {
                return ((intCurrency ? cn.num.zero : "") +
                    cn.getBigNumber(currency[1]) +
                    cn.getDoubleIndex("1"));
            }
            else {
                return (cn.getBigNumber(currency[0]) +
                    cn.getDoubleIndex("0") +
                    cn.getBigNumber(currency[1]) +
                    cn.getDoubleIndex("1"));
            }
        }
        if (currency.length === 1) {
            return cn.getBigNumber(currency[0]) + cn.getDoubleIndex("0");
        }
        return "";
    };
    // 处理一下字符串
    StringHelp.getBeautifulString = function (currency) {
        return currency.replace(/^0+/, "");
    };
    // 判断是否是 0 字符串
    StringHelp.getIsZeroString = function (currency) {
        return /^0+\.*0*$/.test(currency);
    };
    // 判断是否符合数字规则
    StringHelp.isNumber = function (currency) {
        return !Number.isNaN(currency);
    };
    return StringHelp;
}());
exports.default = StringHelp;
//# sourceMappingURL=string-help.js.map