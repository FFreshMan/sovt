import {describe} from 'mocha'

const expect = chai.expect
import Vue from 'vue'
import Input from '../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('input', () => {
  expect(Input).to.exist
})
describe('props', () => {
  const Constructor = Vue.extend(Input)
  let vm
  afterEach(() => {
    vm.$destroy()
  })
  it('可以传value', () => {
    vm = new Constructor({
      propsData: {
        value: '123'
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('Input')
    expect(inputElement.value).to.equal('123')
  })
  it('传disabled', () => {
    vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('Input')
    expect(inputElement.disabled).to.equal(true)
  })
  it('传readonly', () => {
    vm = new Constructor({
      propsData: {
        readonly: true
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('Input')
    expect(inputElement.readOnly).to.equal(true)
  })
  it('传error', () => {
    vm = new Constructor({
      propsData: {
        error: '测试error'
      }
    }).$mount()
    const spanElement = vm.$el.querySelector('span')
    expect(spanElement.innerText).to.equal('测试error')
  })
  it('Icon是warning', () => {
    vm = new Constructor({
      propsData: {
        error: '测试error'
      }
    }).$mount()
    const iconElement = vm.$el.querySelector('use')
    expect(iconElement.getAttribute('xlink:href')).to.equal('#warning')
  })
})
describe('事件',()=>{
  const Constructor = Vue.extend(Input)
  let vm
  afterEach(() => {
    vm.$destroy()
  })
  it('支持change', ()=>{
    vm = new Constructor({}).$mount()
    const callback=sinon.fake()
    vm.$on('change',callback)
    let event=new Event('change')
    let inputElement=vm.$el.querySelector('input')
    inputElement.dispatchEvent(event)
    expect(callback).to.have.been.calledWith(event)
  })
  it('input', ()=>{
    vm = new Constructor({}).$mount()
    const callback=sinon.fake()
    vm.$on('input',callback)
    let event=new Event('input')
    let inputElement=vm.$el.querySelector('input')
    inputElement.dispatchEvent(event)
    expect(callback).to.have.been.calledWith(event)
  })
  it('focus', ()=>{
    vm = new Constructor({}).$mount()
    const callback=sinon.fake()
    vm.$on('focus',callback)
    let event=new Event('focus')
    let inputElement=vm.$el.querySelector('input')
    inputElement.dispatchEvent(event)
    expect(callback).to.have.been.calledWith(event)
  })
  it('blur', ()=>{
    vm = new Constructor({}).$mount()
    const callback=sinon.fake()
    vm.$on('blur',callback)
    let event=new Event('blur')
    let inputElement=vm.$el.querySelector('input')
    inputElement.dispatchEvent(event)
    expect(callback).to.have.been.calledWith(event)
  })

})
