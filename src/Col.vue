<template>
  <div class="col"
       :class=colClass
       :style=colStyle>
    <slot>
    </slot>
  </div>
</template>

<script lang="ts">
  let validator = (value) => {
    let keys = Object.keys(value);
    keys.forEach(key => {
      if (!['span', 'offset'].indexOf(key) >= 0) {
        return false
      }
    });
    return true
  };
  export default {
    name: 'g-col',
    props: {
      span: {
        type: [String, Number]
      },
      offset: {
        type: [String, Number]
      },
      ipad: {
        type: Object, validator},
      narrowPc: {type: Object, validator,},
      pc: {type: Object, validator,},
      widePc: {type: Object, validator,}
    },
    data() {
      return {
        gutter: 0
      };
    },
    computed: {
      colStyle() {
        return {paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px'};
      },
      colClass() {
        let {span, offset, ipad, narrowPc, pc, widePc} = this;
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          ipad && `col-ipad-${ipad.span}`,
          narrowPc && `col-narrow-pc-${narrowPc.span}`,
          pc && `col-pc-${pc.span}`,
          widePc && `col-wide-pc-${widePc.span}`
        ];
      }
    }
  };
</script>

<style lang="scss" scoped>
  .col {
    height: 100px;
    padding: 0 10px;

    &:not(:first-child) {
      $class-prefix: offset-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
      @media (min-width: 577px) {
        $class-prefix: offset-ipad-;
        @for $n from 1 through 24 {
          &.#{$class-prefix}#{$n} {
            margin-left: ($n / 24) * 100%;
          }
        }
      }
      @media (min-width: 769px) {
        $class-prefix: offset-narrow-pc-;
        @for $n from 1 through 24 {
          &.#{$class-prefix}#{$n} {
            margin-left: ($n / 24) * 100%;
          }
        }
      }
      @media (min-width: 993px) {
        $class-prefix: offset-pc-;
        @for $n from 1 through 24 {
          &.#{$class-prefix}#{$n} {
            margin-left: ($n / 24) * 100%;
          }
        }
      }
      @media (min-width: 1201px) {
        $class-prefix: offset-wide-pc-;
        @for $n from 1 through 24 {
          &.#{$class-prefix}#{$n} {
            margin-left: ($n / 24) * 100%;
          }
        }
      }
    }

    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    @media (min-width: 577px) {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px) {
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

    }
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
    }
  }

</style>