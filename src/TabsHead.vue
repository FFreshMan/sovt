<template>
  <div class="tabs-header">
    <slot>
    </slot>
    <div class="tabs-header-actions">
      <slot name="actions">
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
  export default{
  inject:['eventBus'],
    created(){
      this.$emit('update:selected', 'head');
      //触发同名事件只被自己监听，其父组件并不会监听到，即不冒泡
    }
  }
</script>

<style lang="scss" scoped>
  $tab-height:40px;
.tabs-header{
  display: flex;
  height: $tab-height;
  justify-content:flex-start;
  align-items: center;
  border: 1px solid black;
  .tabs-header-actions{
    margin-left: auto;
    margin-right: 2em;
  }
}
</style>