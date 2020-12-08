import Currency from "../src";
import 'ts-jest'

describe("nomoney test", function() {
    // 基础测试
    it("基础测试", function() {
        expect(Currency.stringify('0')).toBe('零元整')
        expect(Currency.stringify('1')).toBe('壹元整')
        expect(Currency.stringify('2')).toBe('贰元整')
        expect(Currency.stringify('3')).toBe('叁元整')
        expect(Currency.stringify('4')).toBe('肆元整')
        expect(Currency.stringify('5')).toBe('伍元整')
        expect(Currency.stringify('6')).toBe('陆元整')
        expect(Currency.stringify('7')).toBe('柒元整')
        expect(Currency.stringify('8')).toBe('捌元整')
        expect(Currency.stringify('9')).toBe('玖元整')
        expect(Currency.stringify('10')).toBe('壹拾元整')
        expect(Currency.stringify('6540')).toBe('陆仟伍佰肆拾元整')
        expect(Currency.stringify('164')).toBe('壹佰陆拾肆元整')
        expect(Currency.stringify('164')).toBe('壹佰陆拾肆元整')
        expect(Currency.stringify('9999')).toBe('玖仟玖佰玖拾玖元整')
        expect(Currency.stringify('65411.56')).toBe('陆万伍仟肆佰壹拾壹元伍角陆分')
        expect(Currency.stringify('957841.12')).toBe('玖拾伍万柒仟捌佰肆拾壹元壹角贰分')
        expect(Currency.stringify('127459871.36')).toBe('壹亿贰仟柒佰肆拾伍万玖仟捌佰柒拾壹元叁角陆分')
        expect(Currency.stringify('72564147423.03')).toBe('柒佰贰拾伍亿陆仟肆佰壹拾肆万柒仟肆佰贰拾叁元零叁分')
        expect(Currency.stringify('800000000.03')).toBe('捌亿元零叁分')
        expect(Currency.stringify('800100000.03')).toBe('捌亿零壹拾万元零叁分')
        expect(Currency.stringify('800000000')).toBe('捌亿元整')
        expect(Currency.stringify('800000001')).toBe('捌亿零壹元整')
        expect(Currency.stringify('800000011')).toBe('捌亿零壹拾壹元整')
        expect(Currency.stringify('800000111')).toBe('捌亿零壹佰壹拾壹元整')
        expect(Currency.stringify(800000111)).toBe('捌亿零壹佰壹拾壹元整')
        expect(Currency.stringify(72564147423.03)).toBe('柒佰贰拾伍亿陆仟肆佰壹拾肆万柒仟肆佰贰拾叁元零叁分')
    });


    it("非常规测试", function() {
        expect(Currency.stringify('')).toBe('')
        expect(Currency.stringify('000000000000000000')).toBe('零元整')
        expect(Currency.stringify('0000000000800000111')).toBe('捌亿零壹佰壹拾壹元整')
        expect(Currency.stringify('.01')).toBe('壹分')
    })
});
