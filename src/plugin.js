import Toast from './Toast'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message,toastOptions) {
      const Constructor = Vue.extend(Toast)
      const toast = new Constructor({
        propsData: toastOptions
      })
      //先插入再mount
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}