import Vue from 'vue'
import App from './App.vue'
import VueStarrySky from "vue-starry-sky"
import "vue-starry-sky/lib/vue-starry-sky.css"

Vue.use(VueStarrySky);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


//el 和 template 同时存在是, template 会替换el挂载的内容