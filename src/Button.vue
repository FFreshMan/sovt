<template>
  <button class="g-button"
          :class="{[`icon-${iconPosition}`]:true}"
          @click="$emit('click')">
    <g-icon v-if="icon&&!loading" :name="icon" class="icon">
    </g-icon>
    <g-icon name="loading" class="loading icon" v-if="loading">
    </g-icon>
    <div class="content">
      <slot>
      </slot>
    </div>
  </button>
</template>
//由于g-button是一个复杂标签，所以要内部触发click事件
<script lang="js">
  import Icon from './Icon.vue'

  export default {
    components: {
      'g-icon': Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return !(value !== 'left' && value !== 'right')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $button-height: 32px;
  $font-size: 14px;
  $button-bg: white;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg)
    }
  }

  .g-button {

    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    //不加这句会对不齐
    vertical-align: middle;

    > .icon {
      margin-right: .1em;
      order: 1;
    }

    > .content {
      order: 2;
    }

    &:hover {
      border-color: $border-color-hover
    }

    &:active {
      background-color: $button-active-bg;

      &:focus {
        outline: none;
      }
    }

      &.icon-right {
        > .icon {
          margin-left: .1em;
          margin-right: 0;
          order: 2;
        }

        > .content {
          order: 1;
        }
      }

      > .loading {
        animation: spin 1s infinite linear;
      }
    }
</style>