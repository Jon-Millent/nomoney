import Currency from "../src";


console.log(
    Currency.stringify('3', {
        isCurrency: false,
        lang: Currency.Language.zh_sc
    })
    +
    '点'
    +
    Currency.stringify('45', {
        isCurrency: false,
        lang: Currency.Language.zh_sc
    })
    // 8 0000 0001
)
