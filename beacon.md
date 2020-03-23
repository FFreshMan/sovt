## 1. init npm
```npm init``` 
## 2. git
```git init```
## 3. vue
```npm i vue```
## 4. parcel
```
npm i -D parcel-bundler
//-D=developmen
```
## 5. run parcel 
```
node_modules/.bin/parcel //or
npx parcel...
//if you add parcel globally
parcel src/index.html(--no-cache)
```
## 6.development vue
 ```
alias -> package.json 
//vue-->vue.common.js
```
## 7. chai
```npm i -D chai``` 
```
//how to use
import chai from 'chai'
import spies from  'chai-spies'
chai.use(spies)
const expect = chai.expect
```
## 9. Karma
是一个测试运行器，它可以呼起浏览器，加载测试脚本，然后运行测试用例
```$xslt
npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies
```
### 1. karma.conf.js 
* 更正浏览器，chrome捕获失败，重装
### 2. package.json
```
"dev-test": "parcel watch test/* --no-cache & karma start",
"test": "parcel build test/* --no-cache --no-minify && karma start --single-run"
```
### 3. 父组件无法从全局注册获取子组件，需要手动局部注册
```
import Icon from './Icon.vue'
  export default {
    components: {
      'g-icon': Icon
    }
}
```
### 4. rm -rf dist cache
## 10 dev-test
```shell script
//terminal 1
parcel watch test/* --no-cache
```
```shell script
//terminal 2
karma start
```
## 11 travis ci
touch .travis.yml
travis.com ->your git repository active 
Chrome->ChromeHeadless
## 12 npm publish
```shell script
npm adduser
``` 
```shell script
.nrmrc taobao-->npm
```
```shell script
npm publish
```


