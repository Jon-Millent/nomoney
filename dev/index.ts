import Currency from "../src";


console.log(
    Currency.stringify('0.5', {
        isCurrency: true,
        lang: Currency.Language.zh_sc
    })
    // 8 0000 0001
)
