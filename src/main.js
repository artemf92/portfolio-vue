import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import LazyLoadDirective from "@/directives/LazyLoadDirective";
import SectionScrollDirective from "@/directives/SectionScrollDirective";
import AnimationOnScrollDirective from "@/directives/AnimationOnScrollDirective";

Vue.config.productionTip = false
Vue.directive("lazyload", LazyLoadDirective)
// Vue.directive("animation", SectionScrollDirective)
Vue.directive("animation", AnimationOnScrollDirective)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
