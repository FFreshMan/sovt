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
      };
    },
    inject: ['eventBus'],
    mounted() {
       this.eventBus.$on('update:selected', (names) => {
        if (names.indexOf(this.name)>=0 ) {
         this.open=true
        } else {
          this.open=false
        }
      });
    },
    methods: {
      onShow() {
        if (this.open) {
          this.eventBus.$emit('update:removeSelected',this.name)
        } else
          this.eventBus.$emit('update:addSelected', this.name);
        }
      },
  };
</script>

<style lang="scss" scoped>
  $grey: #ddd;
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

      padding: 8px;
      border-bottom: 1px solid $grey;
    }
  }
</style>