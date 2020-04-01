---
title:Collapse
---
# Collapse

<ClientOnly>
<collapse-demo></collapse-demo>
</ClientOnly>

::: slot collapse
```html
      <g-collapse :selected="['c1','c2']">
        <g-collapse-item name="c1" title="测试">
          <template slot="title">
            <div style=" height: 50px;">
              collapse1
            </div>
          </template>
          content1
        </g-collapse-item>
        <g-collapse-item name="c2" title="测试">
        <template slot="title">
          <div style=" height: 50px; ">
            collapse2
          </div>
        </template>
        content2
      </g-collapse-item>
        <g-collapse-item name="c3" title="测试">
          <template slot="title">
            <div style=" height: 50px; ">
              collapse3
            </div>
          </template>
          content3
        </g-collapse-item>
      </g-collapse>
```
:::

::: slot intro
## collapse

collapse接受两个参数，single和selected
### 1. single

定义是否只能打开一个collapse，single时打开一个的同时关闭其他，默认false

### 2. selected
定义默认打开的collapse，类型为name的数组

##  collapse-item

collapse-item 接受title和name

### 1. title 为插槽，自行添加

### 2. name
用来标志collapse便于管理状态，请保持唯一，必填
:::