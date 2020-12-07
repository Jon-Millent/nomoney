"use strict";
exports.__esModule = true;
var currencyBuild_1 = require("../tools/currencyBuild");
exports["default"] = new currencyBuild_1["default"]({
    num: {
        one: '壹',
        two: '贰',
        three: '叁',
        four: '肆',
        five: '伍',
        six: '陆',
        seven: '柒',
        eight: '捌',
        nigh: '玖',
        zero: '零',
        full: '整',
        and: '零'
    },
    group: {
        unit: [
            '', '万', '亿', '兆',
            '京', '垓', '杼', '穰', '沟',
            '涧', '正', '载', '极',
            '恒河沙', '阿僧祇', '那由他',
            '不可思议', '无量', '大数',
        ],
        base: [
            '十', '百', '千'
        ]
    }
});
