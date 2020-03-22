<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <g-icon v-if="icon" :name="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="js">
  export default {
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value){
          return !(value !== 'left' && value !== 'right');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    //不加这句会对不齐
    vertical-align: middle;

    > .icon {
      margin-right: .2em;
      order: 1;
    }

    > .content {
      order: 2;
    }

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    &.icon-right {
      > .icon {
        margin-left: .2em;
        margin-right: 0;
        order: 2;
      }

      > .content {
        order: 1;
      }
    }
  }
</style>