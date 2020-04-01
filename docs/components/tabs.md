---
title:Tabs
---
## Tabs

<ClientOnly>
  <tabs-demo></tabs-demo>
</ClientOnly>


::: slot tabs
```html
    <g-tabs selected="tab3">
        <g-tabs-head>
          <template slot="actions">
            <g-button>
              actions
            </g-button>
          </template>
          <g-tabs-item name="tab1" :disabled="true">tab1</g-tabs-item>
          <g-tabs-item name="tab2">tab2</g-tabs-item>
          <g-tabs-item name="tab3">tab3</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="tab1"><div class="demo">tab1</div></g-tabs-pane>
          <g-tabs-pane name="tab2"><div class="demo">tab2</div></g-tabs-pane>
          <g-tabs-pane name="tab3"><div class="demo">tab3</div></g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
```

:::

::: slot intro
## 基本结构

```html
      <g-tabs selected="tab3">
        <g-tabs-head>
          <template slot="actions">
            <g-button>
              actions
            </g-button>
          </template>
          <g-tabs-item >tab1</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane >tab1</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
```



最外层为``g-tabs``，里面分为``g-tabs-head``和``g-tabs-body``

``head``中的``g-tabs-item``和``body``中的``g-tabs-pane``
一一对应

在``head``中还有一个为``action``准备的插槽，你可以在这里定义一些按钮


## props
| 参数 | 说明 |类型|可选|默认|
| :-------- | :-------- | :-------- | :-------- | :-------- |
|selected|默认选中项，与name对应|String|——|——|
|disabled|不可用，无法点击|Boolean|true\|false|false|
|name|每一个tab的编号，以便展示正确的内容|String|——|required(必填)|


## 数据双向绑定
在传入selected时你可以传入一个变量，并监听``update:selected``事件，组件触发选中变更事件后会将选中
tab的name属性返回，你也可以直接使用``:selected.sync="data"``来实现tab.name的动态变更

:::

::: slot sync
```html
        <g-tabs :selected.sync="selectedTab" >
        <g-tabs-head>
          <template slot="actions">
            selectedTab
            <g-button>
              {{selectedTab}}
            </g-button>
          </template>
          <g-tabs-item name="tab1" :disabled="true">tab1</g-tabs-item>
          <g-tabs-item name="tab2">tab2</g-tabs-item>
          <g-tabs-item name="tab3">tab3</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="tab1"><div class="demo">tab1</div></g-tabs-pane>
          <g-tabs-pane name="tab2"><div class="demo">tab2</div></g-tabs-pane>
          <g-tabs-pane name="tab3"><div class="demo">tab3</div></g-tabs-pane>
        </g-tabs-body>
```

:::