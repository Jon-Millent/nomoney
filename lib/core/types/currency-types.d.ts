interface CurrencyUnitGroup {
    unit: string[];
    base: string[];
}
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
interface currencyBuildOptions {
    num: CNNumber;
    group: CurrencyUnitGroup;
}
interface currencyParseGroup {
    intArea: string[];
    doubleArea: string;
}
declare enum Language {
    zh_sc = 0,
    zh_cn = 1,
    tw_cn = 2,
    hk_cn = 3
}
interface currencyBaseConfig {
    lang?: Language;
}
interface currencyStringifyConfig extends currencyBaseConfig {
    isCurrency?: boolean;
}
export { CurrencyUnitGroup, CNNumber, currencyBuildOptions, currencyParseGroup, Language, currencyStringifyConfig };
