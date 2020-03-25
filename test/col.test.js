import {describe} from 'mocha'

const expect = chai.expect
import Vue from 'vue'
import Col from '../src/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {

  it('存在.', () => {
    expect(Col).to.exist
  })
  it('接受span属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    let vm = new Constructor({
      propsData: {
        span:1
      }
    }).$mount(div)
    const ColElement = vm.$el
    expect(ColElement.classList.contains('col-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
})