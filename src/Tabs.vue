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
      this.eventBus.$emit('update:selected', this.selected);
      //这两个是有 区别的，前者是自己触发事件，后者是new Vue对象触发的事件
    }
  };
</script>

<style lang="scss" scoped>
  .tabs {

  }
</style>