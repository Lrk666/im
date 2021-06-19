import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/login.vue'
import Reg from '@/components/reg.vue'
import head from '@/components/pages/component/head.vue'
import left from '@/components/pages/component/left.vue'
const routerHistory = createWebHistory()

const router = createRouter({
  history:routerHistory,
  routes: [
    {
      path: '/',name:'login',components: {
        'body': Login,
      },
    },
    {
      path: '/index', components: {
        'body': Login,
      },
    },
	{
	  path: '/reg', components: {
	    'body': Reg,
	  },
	}
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name ? next({
      name: from.name
    }) : next('/error');
  } else {
    next();
  }
});

export default router;