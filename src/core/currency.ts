import cn from "./ruls/cn";
import StringHelp from "./lib/string-help";
import { currencyStringifyConfig, Language } from "./types/currency-types";
import currencyBuild from "./tools/currencyBuild";

class DefaultOptions {
  static currencyStringifyConfig(
    config: currencyStringifyConfig = {}
  ): currencyStringifyConfig {
    return Object.assign(
      {
        lang: Language.zh_cn,
        isCurrency: true,
      },
      config
    );
  }
}

class Currency {
  static get Language(): any {
    return Language;
  }

  // 转换数字货币或者字符串货币 为大写
  static stringify(
    rmb: string | number,
    config: currencyStringifyConfig = {}
  ): string {
    if (!rmb && typeof rmb !== "number") {
      console.warn(
        "please pass in the correct parameters, support numbers or strings"
      );
      return "";
    }

    const inputConfig = DefaultOptions.currencyStringifyConfig(config);
    const cnCurrency = new currencyBuild(cn(inputConfig.lang));

    if (rmb.toString().length > cnCurrency.getMaxLength()) {
      console.warn("maximum length is" + cnCurrency.getMaxLength().toString());
      return "";
    }

    if (!Currency.isValid(rmb)) {
      console.warn("number or string that does not meet the rules");
      return "";
    }

    if (StringHelp.getIsZeroString(rmb.toString())) {
      if (inputConfig.isCurrency) {
        return cnCurrency.num.zero + cnCurrency.num.yuan + cnCurrency.num.full;
      }
      return cnCurrency.num.zero;
    }

    const parseLine = StringHelp.splitMoney(rmb);
    const betterMoon = StringHelp.formatMoon(parseLine.intArea, cnCurrency);

    if (inputConfig.isCurrency) {
      const yuan = cnCurrency.num.yuan;
      const full = cnCurrency.num.full;
      if (parseLine.doubleArea) {
        const doubleBack = StringHelp.formatSun(
          parseLine.doubleArea,
          betterMoon,
          cnCurrency
        );

        if (doubleBack) {
          return (betterMoon ? betterMoon + yuan : "") + doubleBack;
        } else {
          return (betterMoon ? betterMoon + yuan : "") + full;
        }
      } else {
        return betterMoon ? betterMoon + yuan + full : "";
      }
    } else {
      const point = cnCurrency.num.point;
      if (parseLine.doubleArea) {
        const doubleBack = cnCurrency.getBigNumberFormString(
          parseLine.doubleArea
        );
        if (doubleBack) {
          if (!inputConfig.isCurrency && !betterMoon) {
            return cnCurrency.num.zero + point + doubleBack;
          } else {
            return (betterMoon ? betterMoon + point : "") + doubleBack;
          }
        } else {
          return betterMoon;
        }
      } else {
        return betterMoon;
      }
    }
  }

  // 检查是否是符合规则的
  static isValid(rmb: string | number): boolean {
    return StringHelp.isNumber(rmb);
  }

  // 给出字符串或者数字，返回无格式的数字大写
  static capital(
    rmb: string | number,
    config: currencyStringifyConfig = {}
  ): string {
    if (!rmb) {
      console.warn(
        "please pass in the correct parameters, support numbers or strings"
      );
      return "";
    }

    const inputConfig = DefaultOptions.currencyStringifyConfig(config);
    const cnCurrency = new currencyBuild(cn(inputConfig.lang));

    if (!Currency.isValid(rmb)) {
      console.warn("number or string that does not meet the rules");
      return "";
    }

    return cnCurrency.getBigNumberFormString(rmb.toString());
  }
}

export default Currency;
