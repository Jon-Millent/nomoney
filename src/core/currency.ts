import cn from './ruls/cn'
import StringHelp from "./lib/string-help"
import {currencyStringifyConfig, Language} from './types/currency-types'
import currencyBuild from "./tools/currencyBuild";

class DefaultOptions {
    static currencyStringifyConfig(config: currencyStringifyConfig = {}) : currencyStringifyConfig{
        return Object.assign({
            lang: Language.zh_cn,
            isCurrency: true
        }, config)
    }
}

class Currency {
    // 转换数字货币或者字符串货币 为大写
    public static stringify (rmb: string | number, config : currencyStringifyConfig = {}) : string {

        if(!rmb) {
            console.warn('please pass in the correct parameters, support numbers or strings')
            return ''
        }

        const inputConfig = DefaultOptions.currencyStringifyConfig(config)
        const cnCurrency = new currencyBuild(cn(inputConfig.lang))

        if(rmb.toString().length > cnCurrency.getMaxLength()) {
            console.warn('maximum length is' + cnCurrency.getMaxLength().toString())
            return ''
        }

        if(!Currency.isValid(rmb)) {
            console.warn('number or string that does not meet the rules')
            return ''
        }

        if(StringHelp.getIsZeroString(rmb.toString())) {
            if(inputConfig.isCurrency) {
                return cnCurrency.num.zero + cnCurrency.num.yuan + cnCurrency.num.full
            }
            return cnCurrency.num.zero
        }

        let parseLine = StringHelp.splitMoney(rmb)
        let betterMoon = StringHelp.formatMoon(parseLine.intArea, cnCurrency)

        if(inputConfig.isCurrency) {
            let yuan = cnCurrency.num.yuan
            let full = cnCurrency.num.full
            if(parseLine.doubleArea) {
                let doubleBack = StringHelp.formatSun(parseLine.doubleArea, betterMoon, cnCurrency)

                if(doubleBack) {
                    return (betterMoon ? betterMoon + yuan : '') + doubleBack
                } else{
                    return (betterMoon ? betterMoon + yuan : '') + full
                }
            } else {
                return betterMoon ? (betterMoon + yuan + full) : ''
            }
        } else {
            let point = cnCurrency.num.point
            if(parseLine.doubleArea) {
                let doubleBack = cnCurrency.getBigNumberFormString(parseLine.doubleArea)
                if(doubleBack) {
                    if(!inputConfig.isCurrency && !betterMoon) {
                        return cnCurrency.num.zero + point + doubleBack
                    } else {
                        return (betterMoon ? betterMoon + point : '') + doubleBack
                    }

                } else{
                    return betterMoon
                }
            } else {
                return betterMoon
            }
        }

    }

    // 检查是否是符合规则的
    public static isValid (rmb: string | number) : boolean {
        return StringHelp.isNumber(rmb)
    }

    // 给出字符串或者数字，返回无格式的数字大写
    public static capital(rmb: string | number, config : currencyStringifyConfig = {}) : string {

        if(!rmb) {
            console.warn('please pass in the correct parameters, support numbers or strings')
            return ''
        }

        const inputConfig = DefaultOptions.currencyStringifyConfig(config)
        const cnCurrency = new currencyBuild(cn(inputConfig.lang))


        if(!Currency.isValid(rmb)) {
            console.warn('number or string that does not meet the rules')
            return ''
        }

        return cnCurrency.getBigNumberFormString(rmb.toString())

    }

    public static get Language () {
        return Language
    }
}

export default Currency
