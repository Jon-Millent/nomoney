import { currencyStringifyConfig } from "./types/currency-types";
declare class Currency {
    static get Language(): any;
    static stringify(rmb: string | number, config?: currencyStringifyConfig): string;
    static isValid(rmb: string | number): boolean;
    static capital(rmb: string | number, config?: currencyStringifyConfig): string;
}
export default Currency;
