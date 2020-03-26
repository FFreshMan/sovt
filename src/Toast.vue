<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml">
        </slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">
        {{closeButton.text}}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'g-toast',
    props: {
      autoClose: {
        type: [Boolean, Number],
        validator(value) {
          return value === false || typeof value === 'number';
        }
      },
      closeButton: {
        //props若是对象则需用函数返回
        type: Object,
        default: () => {
          return {
            text: '关闭', callback: undefined
          };
        }
      },
      //此属性用于控制是否启动HTML
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'middle', 'bottom'].indexOf(value) >= 0;
        }
      }
    },
    computed: {
      toastClasses() {
        return {[`position-${this.position}`]: true};
      }
    },
    mounted() {
      this.updateLineStyle();
      this.executeAutoClose();
    },
    methods: {
      executeAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close();
          }, this.autoClose * 1000);
        }
      },
      updateLineStyle() {
        //mount时拿不到css高度，得异步执行
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`;
        });
      },
      close() {
        this.$emit('close');
        this.$el.remove();
        //destroy并不会删除dom元素
        this.$destroy();
      },
      onClickClose() {
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          //将当前实例返回给用户
          this.closeButton.callback(this);
        }
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
  @keyframes fade-in {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

  @keyframes slide-up {
    0% {opacity: 0; transform: translateY(100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }

  @keyframes slide-down {
    0% {opacity: 0; transform: translateY(-100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }

  .wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    $animation-duration: 300ms;

    > .toast {
      border-radius: 5px;
      min-height: $toast-height;font-size: $font-size;
      line-height: 1.8;display: flex;align-items: center;
      background: $toast-bg;
      box-shadow: $toast-shadow;
      color: #fff;
      padding: 0 16px;

      .message {
        padding: 8px;
      }

      .close {
        padding-left: 16px;
        flex-shrink: 0;
      }

      .line {
        border-left: 2px solid #666;
        margin-left: 16px;
      }
    }

    &.position-top {
      top: 0;

      > .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation-duration;
      }
    }

    &.position-bottom {
      bottom: 0;

      > .toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animation-duration;
      }
    }

    &.position-middle {
      top: 50%;
      transform: translateY(-50%) translateX(-50%);

      > .toast {
        animation: fade-in $animation-duration;
      }
    }
  }


</style>