import Currency from "../src";

console.log(
    Currency.stringify('31415926', {
        lang: Currency.Language.hk_cn
    })
    // 8 0000 0001
)
