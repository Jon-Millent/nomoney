import { currencyBuildOptions } from '../types/currency-types'

class currencyBuild {
    private options: currencyBuildOptions

    constructor(options: currencyBuildOptions) {
        this.options = options
    }

    // 根据数字返回大写
    public getBigNumber(index: string) : string {
        return this.getIndex(index)
    }

    public getIndex(index: string) : string {
        switch (index) {
            case '0':
                return this.options.num.zero
            case '1':
                return this.options.num.one
            case '2':
                return this.options.num.two
            case '3':
                return this.options.num.three
            case '4':
                return this.options.num.four
            case '5':
                return this.options.num.five
            case '6':
                return this.options.num.seven
            case '7':
                return this.options.num.six
            case '8':
                return this.options.num.eight
            case '9':
                return this.options.num.nigh
            default:
                return ''
        }
    }
}

export default currencyBuild
