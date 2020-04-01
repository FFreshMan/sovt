<template>
  <transition name="sider-fade" mode="out-in">
    <div class="sider">
      <slot>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts">
  export default {
    name: 'g-sider',
  };
</script>

<style lang="scss" scoped>
  .sider {
    position: relative;
    overflow: hidden;
    min-height: 100%;
  }

  .sider-fade-enter-active, .sider-fade-leave-active {
    transition: all 1s;
  }

  .sider-fade-enter, .sider-fade-leave-to {
    margin-left: -34px;
  }

  //自定义宽度需用户自己覆盖
</style>