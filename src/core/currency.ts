import cnCurrency from './ruls/cn'
import StringHelp from "./lib/string-help"

class Currency {
    // 转换数字货币或者字符串货币 为大写
    public static stringify (rmb: string | number) : string {

        if(!rmb) {
            throw new Error('please pass in the correct parameters, support numbers or strings')
        }

        if(rmb.toString().length > cnCurrency.getMaxLength()) {
            throw new Error('maximum length is' + cnCurrency.getMaxLength().toString())
        }

        if(!Currency.isValid(rmb)) {
            throw new Error('number or string that does not meet the rules')
        }

        let parseLine = StringHelp.splitMoney(rmb)

        let betterMoon = StringHelp.formatMoon(parseLine.intArea)

        if(parseLine.doubleArea) {
            let doubleBack = StringHelp.formatSun(parseLine.doubleArea)
            if(doubleBack) {
                return betterMoon + cnCurrency.num.yuan + StringHelp.formatSun(parseLine.doubleArea)
            } else{
                return betterMoon + cnCurrency.num.yuan + cnCurrency.num.full
            }
        } else {
            return betterMoon + cnCurrency.num.yuan + cnCurrency.num.full
        }
    }

    // 解析大写字符串为数字货币字符串
    private static parse (bigRmb: string) : string {
        return ''
    }

    // 检查是否是符合规则的
    public static isValid (rmb: string | number) : boolean {
        if(typeof rmb === "number") {
            return !isNaN(rmb)
        } else {
            return !isNaN(parseFloat(rmb))
        }
    }
}

export default Currency
