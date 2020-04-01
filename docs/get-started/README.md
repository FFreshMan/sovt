
## 快速开始

### 引入

引入后在components中注册标签名，默认为``g-``

```js
import {Button,Collapse} from 'sovt'
import 'sovt/dist/index.css'
import Vue from 'vue'
new Vue({
  el: '#app',
  components: {
    'g-button':Button
  }
})
```