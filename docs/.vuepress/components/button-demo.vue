<template>
  <div>
    <g-button icon="settings">默认按钮</g-button>
    <g-button icon="left">默认按钮</g-button>
    <g-button icon="right" icon-position="right">默认按钮</g-button>
    <div style="margin-top: 10px;">
      <g-button :loading="true">默认按钮</g-button>
      <g-button icon="good">默认按钮</g-button>
      <g-button disabled>默认按钮</g-button>
    </div>
    <pre>
      <code>
      {{code}}
    </code>
    </pre>
  </div>
</template>
<script>
  import Button from '../../../src/Button'

  export default {
    name: 'button-demo',
    components: {
      'g-button': Button
    },
    data() {
      return{
        code:`
        <g-button icon="settings">默认按钮</g-button>
        <g-button icon="left">默认按钮</g-button>
        <g-button icon="right" icon-position="right">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button icon="good">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
        `,
        msg: 'Highlighted!'
      }
    }
  }
</script>