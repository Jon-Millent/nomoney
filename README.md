<h1 align="center">
  nomoney
</h1>
<p align="center">
  人民币数字大写格式化。
</p>
<p align="center">
  <img src="https://i.loli.net/2020/12/09/CDIE85aWFTzsX3O.png">  
</p>

## Install
```shell
yarn add xxx
```
or
```shell
npm install xxx
```

## 使用

### import
```javascript
import xxx form xxx

xxx.stringify('123456')
```
### for browser
```html
<script src="xxx"></script>
```
```javascript
import xxx form xxx

xxx.stringify('123456')
```

## Api

## 单位

## 注意事项


```text
壹	贰	叁	肆	伍	陆	柒	捌
玖	零	拾	佰	仟	万	亿	兆

货币规律：单位，十单位，百单位，千单位

个 = 0

个，十，  百，  千，   
万，十万，百万，千万，
亿，十亿，百亿，千亿，
兆，十兆，百兆，千兆，
京, ... 10^16
垓, ... 10^20
杼, ... 10^24
穰, ... 10^28
沟, ... 10^32
涧, ... 10^36
正, ... 10^40 
载, ... 10^44
极, ... 10^48
恒河沙, ... 10^52
阿僧祇, ... 10^56
那由他, ... 10^60
不可思议, ... 10^64
无量, ... 10^68
大数, ... 10^72

数字规律：0000, 0000, 0000
把数字拆分成四个一组的组别去分词

解题思路：

let input = 123456789
1. 处理普通数字字符串反向分词，每四个词一组
process(1) = [1, 2345, 6789]


2. 对每一组根据下标处理
```
