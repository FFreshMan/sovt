# sovt是一个基于Vue的UI框架
[![Build Status](https://www.travis-ci.org/FFreshMan/sovt.svg?branch=master)](https://www.travis-ci.org/FFreshMan/sovt)
## Introduction

## get start
#### 1. 使用该框架请设置CSS
```
*,*::before,*::after{
box-sizing:border-box
}
```
IE 8及以上支持此样式

同时需要在index.html中引入默认颜色（后续会改为scss变量）
```html
html{
   --button-height: 32px;
   --font-size: 14px;
   --button-bg: white;
   --button-active-bg: #eee;
   --border-radius: 4px;
   --color: #333;
   --border-color: #999;
   --border-color-hover: #666;
  }
```
IE 15及以上支持此样式
#### 2. 安装sovt
```shell script
  npm i -S sovt
```
#### 3. 引入
```js
import {Button,ButtonGroup,Icon} from 'sovt'
import 'sovt/dist/index.css'
export default {
  name: 'App',
  components: {
    'g-button':Button
  }
}
```
## Documentation

## Questions

## Issues

## Changelog

## Stay In Touch

## License

