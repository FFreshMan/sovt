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
      },
      onClickDocument(e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) { return }
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