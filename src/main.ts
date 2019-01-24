import '@/assets/css/normalize.css';
import '@/assets/scss/main.scss';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './registerServiceWorker';
import '@/plugins/vue-analytics';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
