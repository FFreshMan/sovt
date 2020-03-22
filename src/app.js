import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
new Vue({
  data:{
    isLoading:false
  },
  el: '#app',
})