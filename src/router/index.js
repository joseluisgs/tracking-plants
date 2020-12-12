import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'AddPlant',
    // importado diámico
    component: () => import('@/views/add/index.vue'),
  },
  {
    path: '/detail/:id',
    name: 'PlantDetail',
    // Nos iindica que el propio id será prop del componente
    props: true,
    component: () => import('@/views/detail/index.vue'),
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/auth/index.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
