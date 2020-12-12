import {currencyBuildOptions, Language} from '../types/currency-types'

const baseBuild = function () : currencyBuildOptions {
    return {
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
            and: '零',
            yuan: '元',
            jiao: '角',
            fen: '分',
            point: '点'
        },
        group: {
            unit: [
                '', '万', '亿', '兆',
                '京','垓','杼','穰','沟',
                '涧','正','载','极',
                '恒河沙','阿僧祇','那由他',
                '不可思议','无量','大数'
            ],
            base: [
                '拾', '佰', '仟'
            ]
        }
    }
}

const unit = [
    '', '萬', '億', '兆',
    '京','垓','杼','穰','溝',
    '澗','正','載','極',
    '恒河沙','阿僧祇','那由他',
    '不可思議','無量','大數'
]

const zh_cn : currencyBuildOptions = baseBuild()
const hk_cn : currencyBuildOptions = baseBuild()
hk_cn.num.six = '陸'
hk_cn.num.full = '正'
hk_cn.num.point = '點'
hk_cn.group.unit = unit

const tw_cn : currencyBuildOptions = baseBuild()
tw_cn.num.six = '陸'
hk_cn.num.point = '點'
tw_cn.group.unit = unit

const zh_sc : currencyBuildOptions = baseBuild()
zh_sc.num = {
    one: '一',
    two: '二',
    three: '三',
    four: '四',
    five: '五',
    six: '六',
    seven: '七',
    eight: '八',
    nigh: '九',
    zero: '零',
    full: '整',
    and: '零',
    yuan: '元',
    jiao: '角',
    fen: '分',
    point: '点'
}
zh_sc.group.base = [
    '十', '百', '千'
]


export default function (lang?: Language) {
    switch (lang) {
        case Language.zh_cn:
            return zh_cn
        case Language.hk_cn:
            return hk_cn
        case Language.tw_cn:
            return tw_cn
        case Language.zh_sc:
            return zh_sc
        default:
            return zh_cn
    }
}
