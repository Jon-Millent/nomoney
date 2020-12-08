import cn from './ruls/cn'
import StringHelp from "./lib/string-help"
import { Language, currencyStringifyConfig } from './types/currency-types'
import currencyBuild from "./tools/currencyBuild";

class Currency {
    // 转换数字货币或者字符串货币 为大写
    public static stringify (rmb: string | number, config : currencyStringifyConfig = {}) : string {

        const cnCurrency = new currencyBuild(cn(config.lang))

        if(!rmb) {
            console.warn('please pass in the correct parameters, support numbers or strings')
            return ''
        }

        if(rmb.toString().length > cnCurrency.getMaxLength()) {
            console.warn('maximum length is' + cnCurrency.getMaxLength().toString())
            return ''
        }

        if(!Currency.isValid(rmb)) {
            console.warn('number or string that does not meet the rules')
            return ''
        }

        if(StringHelp.getIsZeroString(rmb.toString())) {
            return cnCurrency.num.zero + cnCurrency.num.yuan + cnCurrency.num.full
        }

        let parseLine = StringHelp.splitMoney(rmb)
        let betterMoon = StringHelp.formatMoon(parseLine.intArea, cnCurrency)

        if(parseLine.doubleArea) {
            let doubleBack = StringHelp.formatSun(parseLine.doubleArea, betterMoon, cnCurrency)
            if(doubleBack) {
                return (betterMoon ? betterMoon + cnCurrency.num.yuan : '') + doubleBack
            } else{
                return (betterMoon ? betterMoon + cnCurrency.num.yuan : '') + cnCurrency.num.full
            }
        } else {
            return betterMoon ? (betterMoon + cnCurrency.num.yuan + cnCurrency.num.full) : ''
        }
    }

    // 检查是否是符合规则的
    public static isValid (rmb: string | number) : boolean {
        if(typeof rmb === "number") {
            return !isNaN(rmb)
        } else {
            return !isNaN(parseFloat(rmb))
        }
    }

    public static get Language () {
        return Language
    }
}

export default Currency
