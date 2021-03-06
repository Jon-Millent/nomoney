import { CNNumber, currencyBuildOptions } from "../types/currency-types";

class currencyBuild {
  private options: currencyBuildOptions;

  get num(): CNNumber {
    return this.options.num;
  }

  constructor(options: currencyBuildOptions) {
    this.options = options;
  }

  // 根据数字返回大写
  getBigNumber(index: string): string {
    return this.getIndex(index);
  }

  getBigNumberFormString(currency: string): string {
    let str = "";
    for (let i = 0; i < currency.length; i++) {
      str += this.getIndex(currency[i]);
    }
    return str;
  }

  getIndex(index: string): string {
    switch (index) {
      case "0":
        return this.options.num.zero;
      case "1":
        return this.options.num.one;
      case "2":
        return this.options.num.two;
      case "3":
        return this.options.num.three;
      case "4":
        return this.options.num.four;
      case "5":
        return this.options.num.five;
      case "6":
        return this.options.num.six;
      case "7":
        return this.options.num.seven;
      case "8":
        return this.options.num.eight;
      case "9":
        return this.options.num.nigh;
      default:
        return "";
    }
  }

  getDoubleIndex(index: string): string {
    switch (index) {
      case "0":
        return this.options.num.jiao;
      case "1":
        return this.options.num.fen;
      default:
        return "";
    }
  }

  // 根据索引返回单位
  getUnitByIndex(
    repeatIndex: number,
    numIndex: number
  ): { unit: string; base: string } {
    const nowUnit = this.options.group.unit[repeatIndex];
    if (numIndex === 0) {
      return {
        unit: nowUnit,
        base: "",
      };
    } else {
      return {
        unit: nowUnit,
        base: this.options.group.base[numIndex - 1],
      };
    }
  }

  // 获取最大解析字符串范围
  getMaxLength(): number {
    return this.options.group.unit.length * 4 - 4;
  }
}

export default currencyBuild;
