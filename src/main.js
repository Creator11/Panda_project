import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router.js';
import App from './App.vue';

Vue.use(VueResource);

// Filters
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase();
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})