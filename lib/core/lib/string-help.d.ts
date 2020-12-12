import { currencyParseGroup } from '../types/currency-types';
import currencyBuild from "../tools/currencyBuild";
declare class StringHelp {
    static splitMoney(currency: string | number): currencyParseGroup;
    static formatMoon(currency: string[], cn: currencyBuild): string;
    static formatSun(currency: string, intCurrency: string, cn: currencyBuild): string;
    static getBeautifulString(currency: string): string;
    static getIsZeroString(currency: string): boolean;
    static isNumber(currency: string | number): boolean;
}
export default StringHelp;
