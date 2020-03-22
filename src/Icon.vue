<template>
  <svg class="g-icon">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script lang="js">
  export default {
  props:['name']
  }
</script>

<style lang="scss" scoped>
.g-icon{
  height: 1em;
  width: 1em;
}
</style>