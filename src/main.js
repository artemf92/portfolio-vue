import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app';
import Vuelidate from 'vuelidate';
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap-utilities.css'
import './assets/js/vendors/smooth-scroll'
import './assets/styles/main.scss'
import LazyLoadDirective from "@/directives/LazyLoadDirective";
import SectionScrollDirective from "@/directives/SectionScrollDirective";
import AnimationOnScrollDirective from "@/directives/AnimationOnScrollDirective";

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(firebase);
Vue.directive("lazyload", LazyLoadDirective)
Vue.directive("animation", SectionScrollDirective)
Vue.directive("animation", AnimationOnScrollDirective)
console.log(process.env.VUE_APP_API_KEY);

var firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "portfolio-98b76.firebaseapp.com",
  databaseURL: "https://portfolio-98b76-default-rtdb.firebaseio.com",
  projectId: "portfolio-98b76",
  storageBucket: "portfolio-98b76.appspot.com",
  messagingSenderId: "599379608337",
  appId: "1:599379608337:web:cf9a5380fbd0574a14c2b0",
  measurementId: "G-5RB46B9K35"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
