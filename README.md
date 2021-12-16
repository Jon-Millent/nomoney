<h1 align="center">
  nomoney
</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/nomoney">
        <img src="https://img.shields.io/npm/v/nomoney?style=flat-square" alt="License">
    </a>
    <a href="https://travis-ci.org/github/Jon-Millent/nomoney">
        <img src="https://img.shields.io/travis/Jon-Millent/nomoney?style=flat-square" alt="License">
    </a>
    <a href="https://github.com/Jon-Millent/nomoney/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/jon-millent/nomoney?style=flat-square" alt="License">
    </a>
</p>


<p align="center">
  人民币大写格式化，数字大写格式化，支持简体、繁体。最大支持`10^72`
</p>

## Install
```shell
yarn add nomoney
```
or
```shell
npm install nomoney
```

## 使用

### import
```javascript
import nomoney form 'nomoney'
nomoney.stringify('123456')
```
### for browser
```html

<script src="https://cdn.jsdelivr.net/npm/nomoney@1.0.2/dist/nomoney.min.js"></script>
```
```javascript
nomoney.stringify('123456')
```

## scripts
```shell
npm run build // 打包
npm run dev // 本地开发
npm run test // 发布前测试
npm run test:cover // 覆盖率测试
```

## Api
### stringify
大写格式化目标数字  

``javascript
nomoney.stringify(rmb: string | number, config : currencyStringifyConfig)
``
#### 参数
##### rmb
[required]你需要格式化的数字或字符串数字
##### config
格式化配置
```
{
    lang: Language; //转换的目标语言，详细见属性
    isCurrency: boolean; // 是否是货币，不是货币按照普通数字对待
}
```

#### 返回值
格式化后的大写数字

### capital
给出字符串或者数字，返回无格式的数字大写  

```javascript
nomoney.capital(rmb: string | number, config : currencyStringifyConfig)
```
#### 参数
##### rmb
[required]你需要格式化的数字或字符串数字
##### config
格式化配置
```
{
    lang: Language; //转换的目标语言，详细见属性
    isCurrency: boolean; // 是否是货币，不是货币按照普通数字对待
}
```
#### 返回值
格式化后无格式的数字大写

### isValid
```javascript
nomoney.isValid(rmb: string | number)
```
#### 参数
##### rmb
[required]是否是合法数字
#### 返回值
布尔

## 属性
### Language
目标格式语言

```javascript
enum Language {
    zh_sc,  // 中文简体格式
    zh_cn, // 繁体中文 [默认]
    tw_cn, // 中国台湾格式
    hk_cn, // 中国香港格式
}
```

## 单位

### 支持单位
```text
个
十
百
千 
万
亿
兆
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
```


## change log
* `v1.0.3`
    * 修复当数字为零的情况下返回为空的问题