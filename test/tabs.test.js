import {describe} from 'mocha'

const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/Tabs'
import TabsHead from '../src/TabsHead'
import TabsItem from '../src/TabsItem'
import TabsBody from '../src/TabsBody'
import TabsPane from '../src/TabsPane'
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-pane',TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('tabs', () => {
  it('tabs存在', () => {
    expect(Tabs).to.exist
  })
  it('接受name属性',(done)=>{
    const div=document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML=`
   <g-tabs selected="tab3">
    <g-tabs-head >
      <g-tabs-item name="tab1">tab1</g-tabs-item>
      <g-tabs-item name="tab2">tab2</g-tabs-item>
      <g-tabs-item name="tab3">tab3</g-tabs-item>
    </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="tab1">tp1</g-tabs-pane>
        <g-tabs-pane name="tab2">tp2</g-tabs-pane>
        <g-tabs-pane name="tab3">tp3</g-tabs-pane>
      </g-tabs-body>
  </g-tabs>
    `
    let vm=new Vue({
      el:div
    })
    vm.$nextTick(()=>{
      let tab3=vm.$el.querySelector('.tabs-item:nth-child(3)')
      expect(tab3.classList.contains('active')).to.eq(true)
      done()
    })
  })
})

