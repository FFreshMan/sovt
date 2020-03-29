<template>
  <div class="collapse">
  <slot>
  </slot>
  </div>
</template>

<script lang="ts">
  export default {
  name:'g-collapse',

  }
</script>

<style lang="scss" scoped>
  $border-color:#ddd;
  $border-radius:4px;
.collapse{
  border: 1px solid $border-color;
  border-bottom: none;
  border-radius: $border-radius;
}
</style>