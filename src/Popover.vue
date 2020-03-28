<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content">
      </slot>
    </div>
    <span ref="triggerWrapper">
    <slot>
    </slot>
    </span>
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
    mounted() {

    },
    methods: {
      //@click.stop阻止冒泡
      xxx() {
        this.visible = !this.visible;
        if (this.visible === true) {
          this.$nextTick(() => {
            document.body.appendChild(this.$refs.contentWrapper);
            // getBoundingClientRect是可视区域，absolute相对body
            let {width,height,top,left}=this.$refs.triggerWrapper.getBoundingClientRect();
            this.$refs.contentWrapper.style.left=`${left+window.scrollX}px`;
            this.$refs.contentWrapper.style.top=`${top+window.scrollY}px`;
            console.log(this.$refs.contentWrapper.style.top);
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
  }
  .content-wrapper {
    position: absolute;
    left: 0;
    box-shadow: $box-shadow-color;
    transform: translateY(-100%);
    }
</style>