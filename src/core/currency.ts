import cnCurrency from './ruls/cn'

class Currency {

    // 转换数字货币或者字符串货币 为大写
    public static conversion (rmb: string | number) : string {
        return ''
    }

    // 解析大写字符串为数字货币字符串
    public static parse (bigRmb: string) : string {
        return cnCurrency.getBigNumber(bigRmb)
    }

}

export default Currency
