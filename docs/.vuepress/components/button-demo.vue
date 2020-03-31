<template>
  <div style="margin-top: 30px;">
    <div style="box-shadow:1px 1px 8px #999;">
      <div>
        <g-button icon="settings">默认按钮</g-button>
        <g-button icon="left">默认按钮</g-button>
        <g-button icon="right" icon-position="right">默认按钮</g-button>
      </div>
      <div style="margin-top: 10px;">
        <g-button :loading="true">默认按钮</g-button>
        <g-button icon="good">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
      </div>
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
        <Content slot-key="button"/>
      </g-collapse-item>
    </g-collapse>

      <Content slot-key="props"/>
    <div style="margin-top: 30px;box-shadow:1px 1px 8px #999;">
      <g-button-group>
        <g-button icon="left" icon-position="left">按钮</g-button>
        <g-button icon="right" icon-position="right">按钮</g-button>
        <g-button icon="right" icon-position="right">按钮</g-button>
      </g-button-group>
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
        <Content slot-key="g-button"/>
      </g-collapse-item>
    </g-collapse>
    </div>
</template>
<script>
  import Button from '../../../src/Button'
  import ButtonGroup from '../../../src/Button-group'
  import Collapse from '../../../src/Collapse'
  import CollapseItem from '../../../src/CollapseItem'

  export default {
    name: 'button-demo',
    components: {
      'g-button': Button,
      'g-button-group':ButtonGroup,
      'g-collapse':Collapse,
      'g-collapse-item':CollapseItem
    },
    data() {
      return{
      }
    }
  }
</script>