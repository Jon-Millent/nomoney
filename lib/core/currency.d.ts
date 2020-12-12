import { currencyStringifyConfig, Language } from './types/currency-types';
declare class Currency {
    static stringify(rmb: string | number, config?: currencyStringifyConfig): string;
    static isValid(rmb: string | number): boolean;
    static capital(rmb: string | number, config?: currencyStringifyConfig): string;
    static get Language(): typeof Language;
}
export default Currency;
