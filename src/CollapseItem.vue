<template>
  <div class="collapse-item">
    <div class="title" @click="onShow">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot>
      </slot>
    </div>
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
        single: false
      };
    },
    inject: ['eventBus'],
    mounted() {
      this.eventBus && this.eventBus.$on('update:selected', (name) => {
        if (name !== this.name) {
          if(this.single){
            this.close();
          }
        } else {
          this.show();
        }
      });
    },
    methods: {
      onShow() {
        if (this.open) {
          this.close();
        } else {
          this.eventBus && this.eventBus.$emit('update:selected', this.name);
        }
      },
      close() {
        this.open = false;
      },
      show() {
        this.open = true;
      }
    }
  };
</script>

<style lang="scss" scoped>
  $border-color: #ddd;
  $border-radius: 4px;
  @keyframes shrink {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(50%);
    }
  }

  .collapse-item {
    > .title {
      border: 1px solid $border-color;
      margin-left: -1px;
      border-top: none;
      margin-right: -1px;
      display: flex;
      align-items: center;
      padding: 0 8px;
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

      padding: 8px;
      border-bottom: 1px solid $border-color;
    }
  }
</style>