<template>
  <div class="collapse">
    <slot>
    </slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default {
    name: 'g-collapse',
    props: {
      single: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Array
      }
    },
    data() {
      return {
        eventBus: new Vue(),
        selectedArray: []
      };
    },
    provide() {
      return {
        eventBus: this.eventBus
      };
    },
    mounted() {
      this.eventBus.$emit('update:selected', this.selected);
      let selectedArray = JSON.parse(JSON.stringify(this.selected));
      this.eventBus.$on('update:addSelected', (name) => {
        if (this.single) {
          selectedArray = [name];
        } else {
          selectedArray.push(name);
        }
        this.eventBus.$emit('update:selected', selectedArray);
        this.$emit('update:selected', selectedArray);
      });
      this.eventBus.$on('update:removeSelected', (name) => {
        if(this.single){
          selectedArray=[name]
        }else{
          let index = selectedArray.indexOf(name);
          selectedArray.splice(index, 1);
        }
        this.eventBus.$emit('update:selected', selectedArray);
        this.$emit('update:selected', selectedArray);
      });
    }
  };
</script>

<style lang="scss" scoped>
  $border-color: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $border-color;
    border-bottom: none;
    border-radius: $border-radius;
  }
</style>