import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/index.vue';
import AuthService from '../services/FirebaseService/AuthFirebase';
// import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // Protegemos la ruta
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/add',
    name: 'AddPlant',
    // importado diámico
    component: () => import('@/views/add/index.vue'),
    // Protegemos la ruta
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/detail/:id',
    name: 'PlantDetail',
    // Nos iindica que el propio id será prop del componente
    props: true,
    component: () => import('@/views/detail/index.vue'),
    // Protegemos la ruta
    meta: {
      authRequired: true,
    },
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

// Portejemos rutas
router.beforeEach(async (to, from, next) => {
  const currentUser = await AuthService.getCurrentUser(); //  store.getters.isActivo;
  console.log(currentUser);
  const requiresAuth = to.matched.some((record) => record.meta.authRequired);

  if (requiresAuth && !currentUser) next({ name: 'Auth' });
  else if (!requiresAuth && currentUser) next();
  else next();
});

export default router;
