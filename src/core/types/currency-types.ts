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
}

// currencyBuild options 类型
interface currencyBuildOptions {
    num: CNNumber;
    group: CurrencyUnitGroup
}

export {
    CurrencyUnitGroup,
    CNNumber,
    currencyBuildOptions,
}
