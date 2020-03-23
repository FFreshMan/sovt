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



