<template>
  <div class="tabs-item" @click="changeSelected" :class="classes" :data-name="name">
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
          active:this.active,
          disabled: this.disabled
        }
      }
    },
    created() {
      if(this.eventBus){
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name;
        });
      }
    },
    methods: {
      changeSelected() {
        if(this.disabled){return}
        if(this.eventBus){
          this.eventBus.$emit('update:selected', this.name,this);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  $active-bg:#66ccff;
  $disabled-color:grey;
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
    &.disabled{
      color: $disabled-color;
      cursor: not-allowed;
    }
  }
</style>