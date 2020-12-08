// 人民币单位

// 人民币单位group
interface CurrencyUnitGroup {
    unit: string[];
    base: string[];
}

// 人民币数字对应
interface CNNumber {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
    six: string;
    seven: string;
    eight: string;
    nigh: string;
    zero: string;
    full: string;
    and: string;
    yuan: string;
    jiao: string;
    fen: string;
}

// currencyBuild options 类型
interface currencyBuildOptions {
    num: CNNumber;
    group: CurrencyUnitGroup
}

interface currencyParseGroup {
    intArea: string[],
    doubleArea: string
}

enum Language {
    zh_cn,
    tw_cn,
    hk_cn
}

interface currencyBaseConfig {
    lang?: Language
}

interface currencyStringifyConfig extends currencyBaseConfig{}

export {
    CurrencyUnitGroup,
    CNNumber,
    currencyBuildOptions,
    currencyParseGroup,
    Language,
    currencyStringifyConfig
}
