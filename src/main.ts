import '@/assets/css/normalize.css';
import 'aos/dist/aos.css';
import '@/assets/scss/main.scss';

import Vue from 'vue';
import AOS from 'aos';
import App from './App.vue';
import router from './router';
import store from './store';

import './registerServiceWorker';
import '@/plugins/vue-analytics';
import '@/plugins/vue-meta';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    AOS.init({
      once: true,
      offset: 0,
    });
  },
}).$mount('#app');
