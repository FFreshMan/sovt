// import {describe} from 'mocha'
//
// const expect = chai.expect
// import Vue from 'vue'
// import Tabs from '../src/Tabs'
// import TabsHead from '../src/TabsHead'
// import TabsItem from '../src/TabsItem'
// import TabsBody from '../src/TabsBody'
// import TabsPane from '../src/TabsPane'
// import Button from '../src/Button'
// Vue.component('g-tabs',Tabs)
// Vue.component('g-tabs-head',TabsHead)
// Vue.component('g-tabs-item',TabsItem)
// Vue.component('g-tabs-body',TabsBody)
// Vue.component('g-tabs-pane',TabsPane)
//
// Vue.config.productionTip = false
// Vue.config.devtools = false
//
// describe('item', () => {
//   it('tabs-item存在', () => {
//     expect(TabsItem).to.exist
//   })
//   it('接受name属性',()=>{
//     const Constructor = Vue.extend(TabsItem)
//     const vm = new Constructor({
//       propsData: {
//         name:'testName'
//       }
//     }).$mount()
//     expect(vm.$el.getAttribute('data-name')).to.eq('testName')
//   })
//   it('接受disabled属性',()=>{
//     const Constructor = Vue.extend(TabsItem)
//     const vm = new Constructor({
//       propsData: {
//         disabled:true,
//         name:''
//       }
//     }).$mount()
//     expect(vm.$el.classList.contains('disabled')).to.eq(true)
//     const callback=sinon.fake()
//     vm.$on('click',callback)
//     vm.$el.click()
//     expect(callback).to.have.not.been.called
//   })
// })
//
