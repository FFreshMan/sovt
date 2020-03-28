<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content">
      </slot>
    </div>
    <slot>
    </slot>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'g-popover',
    data() {
      return {
        visible: false
      };
    },
    methods: {
      //@click.stop阻止冒泡
      xxx() {
        this.visible = !this.visible;
        if (this.visible === true) {
          //不异步会同时执行两个click
         setTimeout(() => {
            let eventHandler = () => {
              this.visible = false;
              document.removeEventListener('click', eventHandler);
            };
            //x.bind(this)会变成一个新函数对象
            document.addEventListener('click', eventHandler);
          });
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  $box-shadow-color: 0 0 3px rgba(0, 0, 0, 0.5);
  .popover {
    display: inline-block;
    vertical-align: top;
    border: 1px solid;
    position: relative;
    margin: 30px 50px;

    .content-wrapper {
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red;
      box-shadow: $box-shadow-color;
    }
  }
</style>