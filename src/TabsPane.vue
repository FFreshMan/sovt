<template>
  <div class="tabs-pane" :class="classes">
    <slot>
    </slot>
  </div>
</template>

<script lang="ts">

  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    computed:{
      classes(){
        return{
          active:this.active
        }
      }
    },
    data() {
      return {
        active: false
      };
    },
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      });
    }
  };
</script>

<style lang="scss" scoped>
  .tabs-pane {
    display: none;
    &.active{
      display: block;
    }
  }
</style>