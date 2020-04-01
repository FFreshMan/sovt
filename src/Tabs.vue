<template>
  <div class="tabs">
    <slot>
    </slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default {
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0;
        }
      }
    },
    data() {
      return {
        eventBus: new Vue(),
      };
    },
    provide() {
      return {
        eventBus: this.eventBus
      };
    },
    mounted() {
      // this.$emit('update:selected', 'se');
      //这两个是有 区别的，前者是自己触发事件，后者是new Vue对象触发的事件
      if(this.$children.length===0){
       console&&console.warn&&console.warn('需要一个子组件,tabs的子组件应为tabs-head和tabs-body')
      }
      //this.$children只能获取到子组件，而不是子元素
      this.$children.forEach((vm)=>{
        if(vm.$options.name==='g-tabs-head'){
          vm.$children.forEach((childvm)=>{
            if(childvm.$options.name==='g-tabs-item'&&childvm.name===this.selected){
              this.eventBus.$emit('update:selected', this.selected,childvm);
            }
          })
        }
      });
      this.eventBus.$on('update:selected',(name,vm)=>{
        this.$emit('update:selected',name)
      })
    }
  };
</script>

<style lang="scss" scoped>
  .tabs {

  }
</style>