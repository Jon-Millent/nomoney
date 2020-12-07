"use strict";
exports.__esModule = true;
var StringHelp = /** @class */ (function () {
    function StringHelp() {
    }
    // 货币分组
    StringHelp.splitMoney = function (currency) {
        var split = currency.toString().split('.');
        // 分割
        var intAreaStr = [];
        var intStr = split[0];
        var every = 4;
        var splitRepeat = Math.floor(intStr.length / every);
        var splitRepeatLeft = intStr.length % every;
        intAreaStr.push(intStr.substring(0, splitRepeatLeft));
        for (var index = 0; index < splitRepeat; index++) {
            var start = splitRepeatLeft + index * every;
            intAreaStr.push(intStr.substring(start, start + every));
        }
        return {
            intArea: intAreaStr,
            doubleArea: split[1] || ''
        };
    };
    return StringHelp;
}());
exports["default"] = StringHelp;
