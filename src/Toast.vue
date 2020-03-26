<template>
  <div class="toast">
    <slot>
    </slot>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'g-toast'
  };
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg:rgba(0,0,0,0.75);
  $toast-shadow:0px 0px 3px 0px rgba(0,0,0,0.5);
  .toast {
    height: $toast-height;
    position: fixed;left: 50%;
    top: 0;transform: translateX(-50%);font-size: $font-size;
    line-height: 1.8;display: flex;align-items: center;
    background: $toast-bg;
    box-shadow:$toast-shadow;
    color: #fff;
    padding: 0 16px;
  }
</style>