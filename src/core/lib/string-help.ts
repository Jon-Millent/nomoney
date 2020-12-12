import { currencyParseGroup, currencyStringifyConfig } from '../types/currency-types'
import currencyBuild from "../tools/currencyBuild";

class StringHelp {
    // 货币分组
    public static splitMoney(currency : string | number) : currencyParseGroup {
        let split : string[] = StringHelp.getBeautifulString(currency.toString()).split('.')

        // 分割
        let intAreaStr : string[] = []
        let intStr : string = split[0]
        let every : number = 4;

        let splitRepeat : number = Math.floor(intStr.length / every)
        let splitRepeatLeft : number = intStr.length % every

        if(splitRepeatLeft > 0) {
            intAreaStr.push(
                intStr.substring(0, splitRepeatLeft)
            )
        }

        for (let index=0; index<splitRepeat; index++) {
            let start : number = splitRepeatLeft + index * every
            intAreaStr.push(
                intStr.substring(start, start + every)
            )
        }

        return {
            intArea: intAreaStr,
            doubleArea: split[1] || ''
        }
    }

    // 对分组的整形货币进行格式化
    public static formatMoon(currency : string[], cn: currencyBuild) : string {

        let moon : string = ''

        let nextAppendZero : boolean = false // 下一位是否补零

        currency.forEach((currencyItem, currencyIndex)=> {

            let currencyUnitIndex = currency.length - currencyIndex - 1 // unit 等级
            let hasAppendUnit : boolean = false // 是否补上单位
            let targetAppendUnit : string = '' // 补单位

            for(let moneyIndex=0; moneyIndex<currencyItem.length; moneyIndex++) {
                let moneyLeave = currencyItem.length - moneyIndex - 1
                let moneyNowItem = currencyItem[moneyIndex]
                let moneyNextItem = currencyItem[moneyIndex + 1]

                let unit = cn.getUnitByIndex(currencyUnitIndex, moneyLeave)
                let bigValue = cn.getBigNumber(moneyNowItem)

                let isZero : boolean = moneyNowItem === '0'

                let isLast : boolean = moneyIndex === currencyItem.length - 1

                if(!targetAppendUnit) {
                    targetAppendUnit = unit.unit
                }

                if(nextAppendZero) {
                    if(!isZero) {
                        moon += cn.num.zero
                    }
                    nextAppendZero = false
                }

                if(moneyNextItem) {

                    if(isZero) {
                        // 有下一个单位就要考虑
                        // 下一个单位不是0，就补上去零
                        if(moneyNextItem) {
                            if(moneyNextItem !== '0') {
                                moon += cn.num.zero
                            }
                        }
                    } else {
                        moon += bigValue + unit.base
                    }

                } else {
                    // 没有就不考虑
                    if(isZero) {
                        // 有下一个单位就要考虑
                        // 下一个单位不是0，就补上去零
                        if(moneyNextItem) {
                            if(moneyNextItem !== '0') {
                                moon += cn.num.zero
                            }
                        }
                    } else{
                        moon += bigValue + unit.base + unit.unit
                        hasAppendUnit = true
                    }
                }

                // 最后一位补单位
                if( isLast ) {
                    nextAppendZero = isZero
                    if(!hasAppendUnit && targetAppendUnit && currencyItem !== '0000') {
                        moon += targetAppendUnit
                    }
                }
            }

        })

        return moon
    }

    // 对小数型格式化
    public static formatSun(currency: string, intCurrency: string, cn: currencyBuild) : string {
        currency = currency.substr(0, 2)
        if(currency === '00' || currency === '0') {
            return  ''
        }

        if(currency.length === 2) {
            if(currency[0] === '0') {
                return (intCurrency ? cn.num.zero : '') + cn.getBigNumber(currency[1]) + cn.getDoubleIndex('1')
            } else {
                return cn.getBigNumber(currency[0]) + cn.getDoubleIndex('0') + cn.getBigNumber(currency[1]) + cn.getDoubleIndex('1')
            }
        }

        if(currency.length === 1) {
            return cn.getBigNumber(currency[0]) + cn.getDoubleIndex('0')
        }

        return ''
    }

    // 处理一下字符串
    public static getBeautifulString(currency: string) : string {
        return currency.replace(/^0+/, '')
    }

    // 判断是否是 0 字符串
    public static getIsZeroString(currency: string) : boolean {
        return /^0+\.*0*$/.test(currency)
    }

    // 判断是否符合数字规则
    public static isNumber(currency : string | number) : boolean {
        return !Number.isNaN(currency)
    }
}

export default StringHelp
