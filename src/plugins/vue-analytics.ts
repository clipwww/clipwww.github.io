import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import router from '@/router';

Vue.use(VueAnalytics, {
  id: 'UA-93335284-1',
  router,
});


Vue.mixin({
  methods: {
    $g_gaEventTracking(eventCategory: string, eventAction: string, eventLabel: string): void {
      this.$ga.event(eventCategory, eventAction, eventLabel);
    },
  },
});
