<template>
  <transition name="sider-fade" mode="out-in">
    <div class="sider" v-if="visible">
      <slot>
      </slot>
      <button @click="visible=false">
        close
      </button>
    </div>
  </transition>
</template>

<script lang="ts">
  export default {
    name: 'g-sider',
    data() {
      return {
        visible: true
      };
    },
    methods:{
    }

  };
</script>

<style lang="scss" scoped>
  .sider {

  }

  .sider-fade-enter-active, .sider-fade-leave-active {
    transition: all .3s;
  }

  .sider-fade-enter, .sider-fade-leave-to
  {
    margin-left: -71px;
  }
  //自定义宽度需用户自己覆盖
</style>