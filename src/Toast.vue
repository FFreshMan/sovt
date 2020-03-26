<template>
  <div class="toast">
    <slot>
    </slot>
    <div class="line"></div>
    <span v-if="closeButton" class="close" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'g-toast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 50
      },
      closeButton: {
        //props若是对象则需用函数返回
        type: Object,
        default: () => {
          return {
            text: '关闭', callback: (toast) => {
              toast.close();
            }
          };
        }
      }
    },
    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    methods: {
      close() {
        this.$el.remove();
        this.$destroy();
      },
      onClickClose() {
        this.closeButton.callback(this);
        this.close();
      }
    }
  };
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  $toast-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  .toast {
    border-radius: 5px;
    height: $toast-height;
    position: fixed;left: 50%;
    top: 0;transform: translateX(-50%);font-size: $font-size;
    line-height: 1.8;display: flex;align-items: center;
    background: $toast-bg;
    box-shadow: $toast-shadow;
    color: #fff;
    padding: 0 16px;
  }

  .close {
    padding-left: 16px;
  }

  .line {
    border-left: 2px solid #666;
    margin-left: 16px;
    height: 100%;
  }

</style>