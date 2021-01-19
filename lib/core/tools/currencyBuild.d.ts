import { CNNumber, currencyBuildOptions } from "../types/currency-types";
declare class currencyBuild {
    private options;
    get num(): CNNumber;
    constructor(options: currencyBuildOptions);
    getBigNumber(index: string): string;
    getBigNumberFormString(currency: string): string;
    getIndex(index: string): string;
    getDoubleIndex(index: string): string;
    getUnitByIndex(repeatIndex: number, numIndex: number): {
        unit: string;
        base: string;
    };
    getMaxLength(): number;
}
export default currencyBuild;
