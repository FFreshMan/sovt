<template>
  <svg class="g-icon">
    <use :xlink:href="`#${name}`"/>
  </svg>
</template>

<script lang="js">
  import './svg.js'
  export default {
  props:['name']
  }
</script>

<style lang="scss" scoped>
.g-icon{
  height: 1em;
  width: 1em;
  /*fill:red;*/
}
</style>