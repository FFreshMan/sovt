import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './Button-group.vue'
import Input from './Input'
import Row from './Row'
import Col from './Col'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
new Vue({
  data: {
    isLoading: false,
    message:'hi'
  },
  methods:{
    inputChange(e){
      console.log(e.target.value)
    }
  },
  el: '#app',
})


