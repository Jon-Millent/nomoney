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
    point: string;
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
    zh_sc,
    zh_cn,
    tw_cn,
    hk_cn,
}

interface currencyBaseConfig {
    lang?: Language; // 语言
}

interface currencyStringifyConfig extends currencyBaseConfig{
    isCurrency?: boolean; // 是否是货币, 不是货币的话不带货币单位
}

export {
    CurrencyUnitGroup,
    CNNumber,
    currencyBuildOptions,
    currencyParseGroup,
    Language,
    currencyStringifyConfig
}
