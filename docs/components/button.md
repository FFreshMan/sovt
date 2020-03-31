---
title:Button
---
## Button
### 基本用法


<ClientOnly>
  <button-demo></button-demo>
</ClientOnly>

::: slot button
```html
        <g-button icon="settings">默认按钮</g-button>
        <g-button icon="left">默认按钮</g-button>
        <g-button icon="right" icon-position="right">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button icon="good">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
```
:::

::: slot props
## props
| 参数 | 说明 |类型|可选|默认
| :-------- | :-------- | :-------- | :-------- | :-------- |
|icon|定义可以使用的图标，默认提供以下图标，若要额外添加可以用svg引入|String|见图| —|
|loading|是否使用loading菊花图标|Boolean|true \|false|false|
|iconPosition|定义图标在按钮中的位置|String|'left'\|'right'|'left|
![](https://user-gold-cdn.xitu.io/2020/3/31/1712f47b56c55b70?w=902&h=305&f=png&s=16294)

## Button-group

如果你想将多个按钮合成一组，可以使用Button-group，他的默认样式会将多个按钮合并

:::

::: slot g-button
```html
<g-button-group>
      <g-button icon="left" icon-position="left">按钮</g-button>
      <g-button icon="right" icon-position="right">按钮</g-button>
      <g-button icon="right" icon-position="right">按钮</g-button>
</g-button-group>
```
:::