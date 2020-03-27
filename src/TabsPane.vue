<template>
  <div class="tabs-pane">
    <slot>
    </slot>
  </div>
</template>

<script lang="ts">

  export default{
    inject:['eventBus'],
    created(){
      this.eventBus.$on('update:selected',(name)=>{
        console.log('pane');
        console.log(name);
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-pane{

  }
</style>