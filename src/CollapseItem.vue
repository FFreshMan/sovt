<template>
  <div class="collapse-item">
    <div class="title" @click="onShow">
      {{title}}
    </div>
    <transition name="slide"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter"
                v-on:before-leave="beforeLeave"
                v-on:leave="leave"
                v-on:after-leave="afterLeave">
      <div class="content" v-if="open">
        <slot>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'collapse',
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        open: false,
      };
    },
    computed: {},
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (names) => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true;
        } else {
          this.open = false;
        }
      });
    },
    methods: {
      beforeEnter(el) {
        if (!el.dataset) el.dataset = {};
        el.style.paddingTop = '6px';
        el.style.paddingBottom ='6px';
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.style.height = '0';
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },

      enter(el, done) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
          el.style.height = el.scrollHeight +
            parseInt(el.dataset.oldPaddingTop.slice(0,1)) +
            parseInt(el.dataset.oldPaddingBottom .slice(0,1))+ 'px';
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
          // done();
        } else {
          el.style.height = '';
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }
        el.style.overflow = 'hidden';
      },

      afterEnter(el) {
        // for safari: remove class then reset height is necessary
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
      },

      beforeLeave(el) {
        if (!el.dataset) el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.style.height = el.scrollHeight + 'px';
        el.style.overflow = 'hidden';
      },

      leave(el, done) {
        if (el.scrollHeight !== 0) {
          // for safari: add class after set height, or it will jump to zero height suddenly, weired
          el.style.height = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },

      afterLeave(el) {
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }
      ,
      onShow() {
        if (this.open) {
          this.eventBus.$emit('update:removeSelected', this.name);
        } else
          this.eventBus.$emit('update:addSelected', this.name);
      }
    },
  };
</script>

<style lang="scss" scoped>
  $grey: #ddd;
  $border-radius: 4px;

  .collapse-item {
    > .title {
      border: 1px solid $grey;
      margin-left: -1px;
      border-top: none;
      margin-right: -1px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      background: lighten($grey, 8%);
    }

    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }

    &:last-child {
      > .title:last-child {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }

      > .content:last-child {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }

    > .content {
      transition: all 0.5s ease-in-out;
      border-bottom: 1px solid $grey;
      /*overflow: hidden;*/
      padding-top: 6px;
      padding-bottom: 6px;

    }

  }

</style>