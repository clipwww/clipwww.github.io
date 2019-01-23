// ref. https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),

export default (name: string, index: boolean = false) => () =>
  import(/* webpackChunkName: "page-" */ `../views/${name}${index ? '/Index' : ''}.vue`);
