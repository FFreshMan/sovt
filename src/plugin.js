import Toast from './Toast'
export default {
    install(Vue,options){
      Vue.prototype.$toast=function (message) {
        const Constructor=Vue.extend(Toast)
        const toast=new Constructor()
        //先插入再mount
        toast.$slots.default=message
        toast.$mount()
        document.body.appendChild(toast.$el)
      }
    }
}