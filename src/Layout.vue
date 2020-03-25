<template>
  <div class="layout" :class="layoutClass">
    <slot>
    </slot>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'g-layout',
    data(){
      return{
        layoutClass:{
          hasSider:false
        }
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        if (vm.$options.name==='g-sider') {
        this.layoutClass.hasSider=true
        }
      });
    }
  };
</script>

<style lang="scss" scoped>
  //当layout为子元素，占满
  .layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &.hasSider{
      flex-direction: row;
    }
  }
</style>