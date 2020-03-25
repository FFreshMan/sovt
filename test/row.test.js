import {describe} from 'mocha'

const expect = chai.expect
import Vue from 'vue'
import Row from '../src/Row'
import Col from '../src/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.exist
  })
  it('接受gutter属性', (done) => {
    Vue.component('g-row', Row)
    Vue.component('g-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <g-row gutter="10">
    <g-col span="12"></g-col>
    <g-col span="12"></g-col>
    </g-row>
    `
    const vm = new Vue({
      el: div
    })
    console.log(vm.$el.outerHTML)
    setTimeout(() => {
      const ColElement=document.querySelectorAll('.col')
      expect(getComputedStyle(ColElement[0]).paddingLeft).to.eq('5px')
      expect(getComputedStyle(ColElement[1]).paddingRight).to.eq('5px')
      const RowElement=document.querySelectorAll('.row')
      expect(getComputedStyle(RowElement[0]).marginRight).to.eq('-5px')
      //默认为同步测试，done必须写在之后才不会提前退出
      done()
      vm.$el.remove()
      vm.$destroy()
    }, 0)
  })
  // it('接受align',()=>{
  //   const Constructor =Vue.extend(Row)
  //     const vm = new Constructor({
  //       propsData: {
  //         align:'left'
  //       }
  //     }).$mount()
  //     const RowElement = vm.$el.querySelector('.align-left')
  //     expect(getComputedStyle(RowElement).justifyContent).to.eq('flex-start')
  // })
})