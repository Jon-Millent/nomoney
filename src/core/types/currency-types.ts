interface CurrencyTypes {
    name: String;
    index: number;
}

interface CurrencyUnitGroup {
    unit: CurrencyTypes;
}

interface CNNumber {
    [index: string]: String;
}

export {
    CurrencyTypes,
    CurrencyUnitGroup,
    CNNumber
}
