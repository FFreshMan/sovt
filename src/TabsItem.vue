<template>
  <div class="tabs-item" @click="changeSelected">
    <slot>
    </slot>
  </div>
</template>

<script lang="ts">
  export default {
    inject: ['eventBus'],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        console.log(name);
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

  }
</style>