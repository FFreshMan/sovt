<template>
  <div class="toast" ref="toast" :class="toastClasses">
    <div class="message">
      <!--    你甚至可以传html-->
      <slot v-if="!enableHtml">
      </slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
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
        default: top,
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
          }, this.autoCloseDelay * 1000);
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
  @keyframes toast-bottom-fade-in {
    0%{
      opacity: 0;transform: translateY(100%) translateX(-50%);
    }
    100%{
      opacity: 1;transform: translateY(0) translateX(-50%);
    }
  }
  @keyframes toast-middle-fade-in {
    0%{
      opacity: 0;transform: translateY(100%) translateX(-50%);
    }
    100%{
      opacity: 1;transform: translateY(-50%) translateX(-50%);
    }
  }
  @keyframes toast-top-fade-in {
    0%{
      opacity: 0;transform: translateY(-100%) translateX(-50%);
    }
    100%{
      opacity: 1;transform: translateY(0) translateX(-50%);
    }
  }
  .toast {
    border-radius: 5px;
    min-height: $toast-height;
    position: fixed;left: 50%;
    ;font-size: $font-size;
    line-height: 1.8;display: flex;align-items: center;
    background: $toast-bg;
    box-shadow: $toast-shadow;
    color: #fff;
    padding: 0 16px;

    &.position-top {
      animation: toast-top-fade-in 1s;
      top: 0;
      transform: translateX(-50%);
    }

    &.position-bottom {
      transform: translateX(-50%);
      animation: toast-bottom-fade-in 1s;
      bottom: 0
    }

    &.position-middle {
      animation: toast-middle-fade-in 1s;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
    }

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


</style>