import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import router from '@/router';


Vue.use(VueAnalytics, {
  id: 'UA-93335284-1',
  router,
});
