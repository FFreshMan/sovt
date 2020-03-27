<template>
  <div class="tabs-item" @click="changeSelected" :class="classes">
    <slot>
    </slot>
  </div>
</template>

<script lang="ts">
  export default {
    inject: ['eventBus'],
    data() {
      return {
        active: false
      };
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      },
    },
    computed:{
      classes(){
        return{
          active:this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      });
    },
    methods: {
      changeSelected() {
        this.eventBus.$emit('update:selected', this.name);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .tabs-item {
    flex-shrink: 0;
    padding: 0 3em;
    &.active{
      border: 1px solid red;
    }
  }
</style>