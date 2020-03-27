<template>
  <div class="tabs-header">
    <slot>
    </slot>
    <slot name="actions">
    </slot>
  </div>
</template>

<script lang="ts">
  export default{
  inject:['eventBus'],
    created(){
      console.log(this.eventBus);
    }
  }
</script>

<style lang="scss" scoped>
.tabs-header{

}
</style>