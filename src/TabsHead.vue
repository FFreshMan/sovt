<template>
  <div class="tabs-header">
    <slot>
    </slot>
    <div class="line" ref="line"></div>
    <div class="tabs-header-actions">
      <slot name="actions">
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name:'g-tabs-head',
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected',(name,vm)=>{
        console.log(name);
        console.log(vm.$el);
      })

      // this.$emit('update:selected', 'head');
      //触发同名事件只被自己监听，其父组件并不会监听到，即不冒泡
    }
  };
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: blue;
  .tabs-header {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    .tabs-header-actions {
      margin-left: auto;
      margin-right: 2em;
    }

    .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      width: 100px;
    }
  }
</style>