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
import Tabs from './Tabs'
import TabsHead from './TabsHead'
import TabsItem from './TabsItem'
import TabsBody from './TabsBody'
import TabsPane from './TabsPane'
import Popover from './Popover'
import Collapse from './Collapse'
import CollapseItem from './CollapseItem'

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
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-tabs',Tabs)
Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
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
        position:'middle',
        autoClose: false
      })
    },
    yyy(name){
      console.log(name)
    }
  },
  el: '#app',
})


