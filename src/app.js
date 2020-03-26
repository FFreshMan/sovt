import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './Button-group.vue'
import Input from './Input'
import Row from './Row'
import Col from './Col'
import Layout from './Layout'
import Sider from './Sider'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Toast from './Toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-sider', Sider)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-content',Content)
Vue.component('g-toast',Toast)
Vue.use(plugin)
new Vue({
  data: {
    isLoading: false,
    message:'hi'
  },
  created(){

  },
  methods:{
    showToast(){
      this.$toast('<strong style="color:red">我娃哈哈的</strong>',{
        closeButton:{
          text:'测试',
          callback(vm){
          },
        },
        enableHtml: true,
        position:'top',
        autoClose: false
      })
    }
  },
  el: '#app',
})


