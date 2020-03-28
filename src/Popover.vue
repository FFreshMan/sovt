<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content">
      </slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
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
    //@click.stop阻止冒泡
    methods: {
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapper);
        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
        this.$refs.contentWrapper.style.wordBreak = 'break-all';
      },
      onClickDocument(e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) { return; }
        if (this.$refs.contentWrapper &&
          this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target)) {
          return;
        }
        this.close();
      },
      openPop() {
        this.visible = true;
        setTimeout(() => {
          this.positionContent();
          document.addEventListener('click', this.onClickDocument);
        });
      },
      close() {
        this.visible = false;
        document.removeEventListener('click', this.onClickDocument);
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close();
          } else {
            this.openPop();
          }
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  $box-shadow-color: 0 0 3px rgba(0, 0, 0, 0.5);
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 300px 500px;
  }

  .content-wrapper {
    position: absolute;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: 1px solid $border-color;
    border-radius: $border-radius;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: white;
    transform: translateY(-100%);
    margin-top: -10px;
    padding: .5em 1em;
    max-width: 20em;

    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 10px;
    }

    &::before {
      border-top-color: black;
      top: 100%;
    }

    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
</style>