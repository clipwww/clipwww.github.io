import router from './index';

router.beforeEach((to, from, next) => {
  console.log('[to]', to.path);
  console.log('[from]', from.path);

  next();
});
