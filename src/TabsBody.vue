<template>
  <div class="tabs-body">
    <slot>
    </slot>
  </div>
</template>

<script lang="ts">

  export default{
    inject:['eventBus'],
  }
</script>

<style lang="scss" scoped>
  .tabs-body{

  }
</style>