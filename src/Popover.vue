<template>
  <div class="popover"  @click="xxx">
    <div class="content-wrapper" v-if="visible" >
      <slot name="content">
      </slot>
    </div>
      <slot >
      </slot>
  </div>
</template>

<script lang="ts">
  export default  {
  name:'g-popover',
  data(){
    return{
      visible:false
    }
  },
    methods:{
    xxx(){
      return this.visible=!this.visible
    }
    }
  }
</script>

<style lang="scss" scoped>
  $box-shadow-color:0 0 3px rgba(0,0,0,0.5);
  .popover{
    display: inline-block;
    vertical-align: top;
    border: 1px solid;
    position: relative;
    margin: 30px 50px;
    .content-wrapper{
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red ;
      box-shadow:$box-shadow-color;
    }
  }
</style>