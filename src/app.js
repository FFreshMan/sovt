import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './Button-group.vue'
import Input from './Input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
new Vue({
  data: {
    isLoading: false
  },
  methods:{
    inputChange(e){
      console.log(e.target.value)
    }
  },
  el: '#app',
})


