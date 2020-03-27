<template>
  <div class="tabs-item" @click="changeSelected" :class="classes">
    <slot>
    </slot>
  </div>
</template>

<script lang="ts">
  export default {
    name:'g-tabs-item',
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
        this.eventBus.$emit('update:selected', this.name,this);
      }
    }
  };
</script>

<style lang="scss" scoped>
  $active-bg:blue;
  .tabs-item {
    display: flex;
    flex-shrink: 0;
    padding: 0 3em;
    cursor: pointer;
    height: 100%;
    align-items: center;
    &.active{
      color: $active-bg;
    }
  }
</style>