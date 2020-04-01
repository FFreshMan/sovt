<template>
  <div style="margin-top: 30px;">
    <div style="box-shadow:1px 1px 8px #999;">
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
    </div>
    <g-collapse :selected="[]">
      <g-collapse-item name="code">
        <template slot="title">
          <div style="display: flex;justify-content: flex-end; width:100%;">
            <g-button icon="down" icon-position="right">
              代码
            </g-button>
          </div>
        </template>
        <Content slot-key="collapse"/>
      </g-collapse-item>
    </g-collapse>
    <Content slot-key="intro"/>
  </div>
</template>

<script lang="js">
  import Button from '../../../src/Button'
  import ButtonGroup from '../../../src/Button-group'
  import Collapse from '../../../src/Collapse'
  import CollapseItem from '../../../src/CollapseItem'

  export default {
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup,
      'g-collapse': Collapse,
      'g-collapse-item': CollapseItem
    },
  }
</script>

<style lang="scss" scoped>

</style>